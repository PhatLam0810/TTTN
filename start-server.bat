@echo off
REM Quick Server Starter for MyE Game Arena

echo ========================================
echo   MyE Game Arena - Vanilla JS Version
echo ========================================
echo.

REM Check if Python is available
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Starting Python HTTP Server on http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    exit /b
)

REM Check if Node.js is available
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Checking for http-server...
    where http-server >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo Starting http-server on http://localhost:8080
        echo Press Ctrl+C to stop the server
        echo.
        http-server
        exit /b
    ) else (
        echo http-server not found. Installing...
        npm install -g http-server
        echo Starting http-server on http://localhost:8080
        echo Press Ctrl+C to stop the server
        echo.
        http-server
        exit /b
    )
)

REM If neither Python nor Node is available
echo.
echo ERROR: Neither Python nor Node.js found!
echo Please install one of them:
echo - Python: https://www.python.org/downloads/
echo - Node.js: https://nodejs.org/
echo.
pause
