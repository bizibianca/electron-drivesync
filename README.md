# Folder Sync with Google Drive

Folder Sync with Google Drive is a user-friendly, cross-platform Electron application that seamlessly synchronizes a local folder on your computer with your Google Drive account. Keep your files up-to-date effortlessly as the application monitors changes in your local folder and automatically updates the corresponding files in your Google Drive. Operating discreetly in the background, the application provides important information and notifications through a system tray icon.

## Features

- Authenticate with Google Drive using a service account
- Synchronize local folder with Google Drive folder
- Automatically upload new files or update existing files in Google Drive
- Watch local folder for changes and synchronize in real-time
- Display file synchronization status and folder size in system tray context menu
- Minimal user interface for folder selection and application settings
- Cross-platform compatibility for Windows and macOS

## Dependencies

- electron
- googleapis
- google-auth-library
- chokidar
- mime-types
- fs
- os
- path

## Getting Started

To get started with Folder Sync with Google Drive, follow these steps:

1. Clone the repository
2. Run `npm install` to install the required dependencies
3. Run `npm start` to launch the application
