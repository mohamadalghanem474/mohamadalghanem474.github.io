#!/bin/bash

echo "🚀 Starting GitHub Pages Deployment..."

# Step 1: Clean old builds
echo "🧹 Cleaning previous build folders..."
rm -rf .next out

# Step 2: Build and export
echo "🔧 Building and exporting static site..."
npm run build

# Step 3: Add .nojekyll to prevent GitHub Pages from breaking _next/
echo "📄 Adding .nojekyll file..."
touch out/.nojekyll

# Step 4: Copy exported files to root
echo "📁 Copying exported site to project root..."
cp -a out/* .

# Step 5: Commit and push to GitHub
echo "📦 Committing and pushing to GitHub..."
git add .
git commit -m "🚀 Deploy static site to GitHub Pages"
git push origin main

echo "✅ Deployment complete! Visit: https://mohamadalghanem474.github.io"
