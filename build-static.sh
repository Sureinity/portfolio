#!/bin/bash
# Build script to generate static HTML

echo "Building static terminal portfolio..."

# Create build directory
mkdir -p build

# The static HTML file is already created in build/index.html
# Just ensure it exists and is ready for deployment

if [ -f "build/index.html" ]; then
    echo "✅ Static build complete! Ready for deployment."
    echo "📁 Files are in the 'build' directory."
    echo "🌐 Main file: build/index.html"
else
    echo "❌ Build failed: index.html not found"
    exit 1
fi