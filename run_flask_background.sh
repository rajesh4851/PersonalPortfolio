#!/bin/bash
export FLASK_APP=app.py
export FLASK_ENV=development
export PORT=5001

echo "Starting Flask Portfolio on port $PORT..."
python run.py > flask.log 2>&1 &
echo $! > flask.pid
echo "Flask started with PID $(cat flask.pid)"