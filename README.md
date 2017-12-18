# Minimalist PDF Viewer

Minimalist PDF reader. Frameless window, no distractions, Chrome's PDF viewing UI, simple shortcuts.

Extremely lightweight, prettier icon for PDF than normal.

## Prerequisites

- ElectronJS > 1.6.4, `npm install electron --global`
- [Node](https://nodejs.org) > 1.8
- Electron Local Shortcut, `npm install electron-localshortcut`

## Usage

Compile with electron. Right click any PDF file, open with, choose this application. (or on Mac do whatever it is you need to do to associate filetype with this application).

Then, double click any PDF to open.

## Shortcuts

`q` to quit.

`Backspace` to go back if you click a link.

`m` to minimize.

`Shift+m` to toggle maximizing the window.

`Shift+f` to toggle fullscreen.

`c` to center the window.

`l` to position to the left.

`r` to position to the right.

_Can't move the window freely on Windows and Linux because there is no frame (frameless window)._