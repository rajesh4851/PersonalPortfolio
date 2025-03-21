#!/bin/bash
# Stop any Node.js processes
pkill -f "node" || true
# Start the Flask application
python run.py