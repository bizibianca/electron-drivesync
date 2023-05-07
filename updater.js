const { app, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');

// Configure log debugging
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';

// Set the token for the autoUpdater
autoUpdater.requestHeaders = { Authorization: 'token ' + process.env.GH_TOKEN };

// Disable auto downloading of updates
autoUpdater.autoDownload = false;

// Single exports to check for and apply any available updates
module.exports = () => {
  // Check for update (GH releases)
  autoUpdater.checkForUpdates();

  // Listen for update found
  autoUpdater.on('update-available', () => {
    // Prompt user to start download
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update available',
        message:
          'A new version of HM Drive Sync is available. Do you want  to update now?',
        buttons: ['Update', 'No'],
      })
      .then((result) => {
        let buttonIndex = result.response;

        // if button 0 (update), start downloading the update
        if (buttonIndex === 0) autoUpdater.downloadUpdate();
      });
  });

  // Listen for update downloaded
  autoUpdater.on('update-downloaded', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update ready',
        message: 'Install and restart now?',
        buttons: ['Yes', 'Later'],
      })
      .then((result) => {
        let buttonIndex = result.response;

        if (buttonIndex === 0) autoUpdater.quitAndInstall(false, true);
      });
  });

  // Listen for auto-updater error
  autoUpdater.on('error', (error) => {
    dialog.showErrorBox(
      'Error: ',
      error == null ? 'unknown' : (error.stack || error).toString()
    );
  });
};
