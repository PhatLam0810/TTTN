#!/bin/bash

# Quick Server Starter for MyE Game Arena

echo "========================================"
echo "  MyE Game Arena - Vanilla JS Version"
echo "========================================"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "Starting Python HTTP Server on http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Starting Python HTTP Server on http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000
elif command -v node &> /dev/null; then
    if command -v http-server &> /dev/null; then
        echo "Starting http-server on http://localhost:8080"
        echo "Press Ctrl+C to stop the server"
        echo ""
        http-server
    else
        echo "http-server not found. Installing..."
        npm install -g http-server
        echo "Starting http-server on http://localhost:8080"
        echo "Press Ctrl+C to stop the server"
        echo ""
        http-server
    fi
else
    echo ""
    echo "ERROR: Neither Python nor Node.js found!"
    echo "Please install one of them:"
    echo "- Python: https://www.python.org/downloads/"
    echo "- Node.js: https://nodejs.org/"
    echo ""
    exit 1
fi
