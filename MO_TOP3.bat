@echo off
setlocal
cd /d "%~dp0APP"
where node >nul 2>nul
if errorlevel 1 (
 echo May chua co Node.js 22 tro len.
 pause
 exit /b 1
)
node -e "process.exit(Number(process.versions.node.split('.')[0]) >= 22 ? 0 : 1)"
if errorlevel 1 (
 echo Can Node.js 22 tro len.
 pause
 exit /b 1
)
if not exist "dist\server\index.js" node scripts\build.mjs
if errorlevel 1 (
 pause
 exit /b 1
)
node local.mjs
pause
