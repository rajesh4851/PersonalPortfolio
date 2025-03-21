import subprocess
import sys
import datetime
from app import app

def run_app():
    print("Starting Flask Portfolio App...")
    # Pass the current time to the template context
    app.jinja_env.globals['now'] = datetime.datetime.now()
    # Run the app with the host and port configured
    app.run(host='0.0.0.0', port=5000, debug=True)

if __name__ == "__main__":
    run_app()