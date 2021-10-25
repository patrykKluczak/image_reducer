const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const setMenu = require("./electron/menu");
const setGlobalShortcut = require("./electron/shortcut");
const actionsOpen = require("./electron/actions/openFile");
const actionsSave = require("./electron/actions/saveFile");

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 764,
    height: 764,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  const menu = setMenu(mainWindow);

  isDev && mainWindow.webContents.openDevTools();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
  setGlobalShortcut(mainWindow);
}

ipcMain.on("file:open", () => actionsOpen.openFile(mainWindow));
ipcMain.on("file:save", (e, option) =>
  actionsSave.saveFile(option, mainWindow)
);

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
