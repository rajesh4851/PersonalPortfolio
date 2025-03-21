#!/bin/bash
export FLASK_APP=app.py
export FLASK_ENV=development
export PORT=5000

echo "Starting Flask Portfolio on port $PORT..."
python -m flask run --host=0.0.0.0 --port=$PORT