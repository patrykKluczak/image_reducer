const isDev = require("electron-is-dev");
const isMac = process.platform === "darwin";
const actionsOpen = require("./actions/openFile");

module.exports = function (mainWindow) {
  return [
    ...(isMac
      ? [
          {
            label: "Image Reducer",
            submenu: [
              {
                label: "About program",
              },
            ],
          },
        ]
      : []),
    {
      label: "File",
      submenu: [
        {
          label: "Open File",
          accelerator: "CmdOrCtrl+O",
          click() {
            actionsOpen.openFile(mainWindow);
          },
        },
      ],
    },
    ...(isDev
      ? [
          {
            label: "Developer",
            submenu: [
              {
                label: "Toggle Developers Tolls",
                accelerator: isMac ? "Alt+Command+I" : "Ctrl+Shift+I",
                click() {
                  mainWindow.webContents.toggleDevTools();
                },
              },
            ],
          },
        ]
      : []),
  ];
};
