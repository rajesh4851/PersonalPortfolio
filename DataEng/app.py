from flask import Flask, render_template, request, jsonify
from flask_assets import Environment, Bundle
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Configure static assets
assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('scss/main.scss', filters='scss', output='css/main.css')
assets.register('scss_all', scss)

# Define routes
@app.route('/')
def index():
    # Sample project data - this would be replaced by a database in a production app
    projects = [
        {
            "id": "1",
            "title": "AI Data Pipeline",
            "description": "End-to-end data pipeline for ML models with automated cleaning and preprocessing",
            "image": "/static/images/projects/data-pipeline.svg",
            "tags": ["Python", "Apache Airflow", "TensorFlow", "AWS"],
            "category": "Machine Learning"
        },
        {
            "id": "2",
            "title": "NLP Sentiment Analysis",
            "description": "Real-time sentiment analysis tool for social media data",
            "image": "/static/images/projects/sentiment-analysis.svg",
            "tags": ["Python", "NLTK", "Transformers", "React"],
            "category": "Machine Learning"
        },
        {
            "id": "3",
            "title": "AI Data Eng Website",
            "description": "Responsive portfolio website built with Flask and modern design principles",
            "image": "/static/images/projects/portfolio.svg",
            "tags": ["Python", "Flask", "Jinja2", "TailwindCSS"],
            "category": "Web Development"
        }
    ]
    
    # Skills data
    skill_categories = [
        {
            "title": "Data Engineering",
            "icon": "database",
            "skills": [
                {"name": "Apache Spark", "icon": "apache"},
                {"name": "Airflow", "icon": "airflow"},
                {"name": "SQL", "icon": "postgresql"},
                {"name": "AWS", "icon": "aws"}
            ]
        },
        {
            "title": "Machine Learning",
            "icon": "brain",
            "skills": [
                {"name": "TensorFlow", "icon": "tensorflow"},
                {"name": "PyTorch", "icon": "pytorch"},
                {"name": "Scikit-Learn", "icon": "scikitlearn"},
                {"name": "Hugging Face", "icon": "huggingface"}
            ]
        },
        {
            "title": "Web Development",
            "icon": "code",
            "skills": [
                {"name": "Python", "icon": "python"},
                {"name": "Flask", "icon": "flask"},
                {"name": "JavaScript", "icon": "javascript"},
                {"name": "TailwindCSS", "icon": "tailwindcss"}
            ]
        }
    ]
    
    # Contact info
    contact_info = {
        "email": "contact@example.com",
        "location": "San Francisco, CA",
        "social": {
            "github": "https://github.com/yourusername",
            "linkedin": "https://linkedin.com/in/yourusername",
            "twitter": "https://twitter.com/yourusername"
        }
    }
    
    return render_template('index.html', 
                           projects=projects, 
                           skill_categories=skill_categories,
                           contact_info=contact_info)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    # In a production app, you would send an email or store this in a database
    print(f"Contact form submission: {data}")
    # Simple validation
    if not all(key in data for key in ['name', 'email', 'subject', 'message']):
        return jsonify({"success": False, "message": "Missing required fields"}), 400
    
    # For demo purposes, just return success
    return jsonify({"success": True, "message": "Message sent successfully!"})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)