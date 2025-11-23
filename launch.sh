#!/bin/bash

# HSA Photography Portfolio - Setup & Launch Script
# This script sets up and launches the development environment

set -e  # Exit on error

echo "╔════════════════════════════════════════════════════════╗"
echo "║  🎨 HSA Photography Portfolio - Setup & Launch        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Navigate to project directory
cd /Users/harshadarade/Projects/hsa_portfolio

echo "📦 Checking project structure..."
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found!"
    exit 1
fi
echo "✅ Project directory found"
echo ""

# Check Node.js version
echo "🔍 Checking Node.js..."
NODE_VERSION=$(node --version)
echo "✅ Node.js: $NODE_VERSION"
echo ""

# Check npm version
echo "🔍 Checking npm..."
NPM_VERSION=$(npm --version)
echo "✅ npm: $NPM_VERSION"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install --legacy-peer-deps
    echo "✅ Dependencies installed"
    echo ""
else
    echo "✅ Dependencies already installed"
    echo ""
fi

# Show project info
echo "📋 Project Information:"
echo "   Name: $(grep '\"name\"' package.json | head -1 | cut -d'"' -f4)"
echo "   Version: $(grep '\"version\"' package.json | head -1 | cut -d'"' -f4)"
echo ""

echo "📁 Project Structure:"
echo "   Components: $(ls -1 src/components | wc -l)"
echo "   API Routes: $(find src/app/api -name '*.ts' 2>/dev/null | wc -l)"
echo "   Total Files: $(find src -type f | wc -l)"
echo ""

echo "🎨 Available Sections:"
echo "   ✓ Header (Navigation)"
echo "   ✓ Hero (Landing)"
echo "   ✓ Gallery (Photo grid)"
echo "   ✓ About (Photographer info)"
echo "   ✓ Contact (Form with API)"
echo "   ✓ Footer (Social links)"
echo ""

echo "🚀 Starting development server..."
echo "   URL: http://localhost:3000"
echo "   Press Ctrl+C to stop"
echo ""

# Start development server
npm run dev
