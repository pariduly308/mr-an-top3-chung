import http from 'node:http';
import {mkdir,readFile,readdir,writeFile,rename,link,unlink} from 'node:fs/promises';
import {readFileSync,existsSync} from 'node:fs';
import {randomUUID} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
import service from './dist/server/index.js';
import {syncLocal} from './local-sync.mjs';

const root=dirname(fileURLToPath(import.meta.url));
const dir=join(root,'DU_LIEU_MAY');
await mkdir(dir,{recursive:true});
const localSeed=join(root,'worker','local-seed.json');
const seed=JSON.parse(readFileSync(existsSync(localSeed)?localSeed:join(root,'worker','seed.json'),'utf8'));
const encode=key=>Buffer.from(key).toString('base64url');
const filename=key=>join(dir,encode(key)+'.json');
const bucket={
 async list({prefix=''}){
  const entries=await readdir(dir);
  return {objects:entries.filter(entry=>entry.endsWith('.json')).map(entry=>Buffer.from(entry.slice(0,-5),'base64url').toString()).filter(key=>key.startsWith(prefix)).map(key=>({key})),truncated:false};
 },
 async get(key){
  try{const bytes=await readFile(filename(key),'utf8');return {json:async()=>JSON.parse(bytes)};}
  catch(error){if(error.code==='ENOENT')return null;throw error;}
 },
 async put(key,value,options){
  const target=filename(key),temp=target+'.'+randomUUID()+'.tmp';
  await writeFile(temp,value,{flag:'wx'});
  try{
   if(options?.onlyIf?.etagDoesNotMatch==='*'){
    try{await link(temp,target);}catch(error){if(error.code==='EEXIST')return null;throw error;}
   }else await rename(temp,target);
   return {};
  }finally{await unlink(temp).catch(error=>{if(error.code!=='ENOENT')throw error;});}
 }
};
let syncing;
const server=http.createServer(async(req,res)=>{
 try{
  const host='127.0.0.1:'+server.address().port,origin='http://'+host;
  if(req.headers.host!==host||req.headers['sec-fetch-site']==='cross-site'||(req.headers.origin&&req.headers.origin!==origin)){
   res.writeHead(403).end();return;
  }
  const url=new URL(req.url,origin);
  if(url.origin!==origin){res.writeHead(403).end();return;}
  let response;
  if(req.method==='POST'&&['/api/update','/api/central/update'].includes(url.pathname)){
   syncing ||= syncLocal(bucket,seed).finally(()=>{syncing=null;});
   response=Response.json(await syncing,{headers:{'Cache-Control':'no-store'}});
  }else{
   response=await service.fetch(new Request(url,{method:req.method,headers:req.headers}),{BUCKET:bucket});
  }
  res.writeHead(response.status,Object.fromEntries(response.headers));
  res.end(Buffer.from(await response.arrayBuffer()));
 }catch(error){
  console.error('Lỗi xử lý:',error.message);
  if(!res.headersSent)res.writeHead(500,{'Content-Type':'text/plain; charset=utf-8'});
  res.end('Có lỗi khi xử lý. Dữ liệu đã lưu vẫn dùng được.');
 }
});
server.listen(0,'127.0.0.1',()=>{
 const url='http://127.0.0.1:'+server.address().port;
 console.log('Mở ứng dụng tại '+url);
 if(process.platform==='win32'&&!process.argv.includes('--no-browser')){
  const browser=spawn('rundll32.exe',['url.dll,FileProtocolHandler',url],{stdio:'ignore',windowsHide:true,detached:true});
  browser.on('error',()=>console.log('Anh mở đường dẫn trên bằng trình duyệt.'));
  browser.unref();
 }
});
