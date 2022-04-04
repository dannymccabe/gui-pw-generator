const { app, BrowserWindow, ipcMain } = require("electron");

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,//basic sizing settings and preferences
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(createWindow);

ipcMain.on("generatePassword", (event, data) => { // use win to access webcontents - when generate random password send to front end
  const randomPassword = data + Math.random().toString(36).substr(2, 5);
  win.webContents.send("receivePassword", randomPassword);
});