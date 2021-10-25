const { globalShortcut, app } = require("electron");

module.exports = function (mainWindow) {
  globalShortcut.register("CmdOrCtrl+R", () => mainWindow.reload());
  globalShortcut.register("CmdOrCtrl+Q", () => app.quit());
};
