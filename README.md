# FiledimeSpeech Chrome & Extension

## Overview
FiledimeSpeech is a Browser extension that adds a context menu option allowing users to play selected text using the MeloTTS text-to-speech engine. With a simple right-click, you can hear the selected text read aloud through your speakers.

## Features
- **Text-to-Speech**: Convert selected text into speech with a single click.
- **Context Menu Integration**: Easy access via the right-click context menu.
- **Customizable**: Modify the endpoint and additional parameters as needed.

## Installation
1. Clone the repository or download the ZIP file.
2. Unpack (if ZIP) and load the extension into Chrome via `chrome://extensions/`.
3. Enable Developer Mode and click on "Load unpacked".
4. Select the extension directory.

## Usage
To use FiledimeSpeech:
1. Select the text you want to hear.
2. Right-click to open the context menu.
3. Click on "Play using FiledimeSpeech".
4. The text will be sent to the MeloTTS endpoint and played through your speakers.

## Customization
You can customize the TTS endpoint and other parameters by editing the `genericOnClick` function in the `sendtomelotts.js` file.

## Support
For support, please open an issue in the GitHub repository.

## Acknowledgments
- MeloTTS for the text-to-speech engine.
- All contributors to the project.
