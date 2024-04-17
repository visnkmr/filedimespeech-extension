#!/bin/bash

# Create temporary directories for Chrome and Firefox extensions
mkdir -p chrome_temp firefox_temp

# Copy files to the temporary directories with the correct names
cp manifest_chrome.json chrome_temp/manifest.json
cp manifest_firefox.json firefox_temp/manifest.json
cp sendtomelo.js chrome_temp/
cp sendtomelo.js firefox_temp/

# Create zip files from the temporary directories
zip -r chrome_extension.zip chrome_temp/*
zip -r firefox_extension.zip firefox_temp/*

# Remove temporary directories
rm -rf chrome_temp firefox_temp

echo "ZIP files created successfully."
