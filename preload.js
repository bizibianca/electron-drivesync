const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openFileDialog: async () => {
    return await ipcRenderer.invoke('open-folder-dialog');
  },
  syncFolder: async (folderPath) => {
    return await ipcRenderer.invoke('sync-folder', folderPath);
  },
});
