#!/bin/bash

# Stop on error
set -e

echo "📦 Bundling the portfolio project for download..."

# Build the project
echo "🔨 Building the project..."
npm run build

# Create a dist folder if it doesn't exist
mkdir -p dist

# Create a temporary folder for bundling
TEMP_DIR=$(mktemp -d)
BUNDLE_NAME="portfolio-project.zip"

echo "📋 Copying necessary files to bundle..."

# Copy essential files
cp -r dist $TEMP_DIR/
cp package.json $TEMP_DIR/
cp README.md $TEMP_DIR/ 2>/dev/null || echo "No README.md found"
cp -r public $TEMP_DIR/ 2>/dev/null || echo "No public folder found"
cp theme.json $TEMP_DIR/
cp tailwind.config.ts $TEMP_DIR/
cp postcss.config.js $TEMP_DIR/

# Create a simple README if it doesn't exist
if [ ! -f "README.md" ]; then
  cat > $TEMP_DIR/README.md << EOF
# Portfolio Project

A personal portfolio website with:
- Black background
- VS Code blue (#007ACC) for buttons and headings
- Milk white text
- Responsive design

## Getting Started

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Start the production server:
   \`\`\`
   npm start
   \`\`\`

3. Access the website at http://localhost:3000

## Built With
- React
- Tailwind CSS
- Express
- Vite
EOF
fi

# Create a simple start script
cat > $TEMP_DIR/start.sh << EOF
#!/bin/bash
npm install
npm start
EOF
chmod +x $TEMP_DIR/start.sh

# Create ZIP file
echo "🗜️ Creating ZIP file..."
cd $TEMP_DIR
zip -r $BUNDLE_NAME .
mv $BUNDLE_NAME ../

# Clean up
cd ..
rm -rf $TEMP_DIR

echo "✅ Bundle created at $BUNDLE_NAME"
echo "You can download the project from the root folder"