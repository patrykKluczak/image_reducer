const slash = require("slash");
const imagemin = require("imagemin");
const imageminMozJpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

exports.saveFile = function (obj) {
  (async function (obj) {
    console.log("PK async save func ", obj);
    const { image, path: imagePath, qualityImg } = obj;
    const shrink = path.dirname(imagePath) + "/imageReduce";
    const qualityPng = qualityImg / 100;

    if (image && imagePath) {
      await imagemin([slash(imagePath)], {
        destination: shrink,
        plugins: [
          imageminMozJpeg({ quality: qualityImg }),
          imageminPngquant({
            quality: [qualityPng, qualityPng],
          }),
        ],
      });
      mainWindow.webContents.send("file:saveResponse", {
        success: true,
      });
    }
  })(obj);
};
