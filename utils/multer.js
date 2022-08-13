const multer = require("multer");

const path = require("path");

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".pneg"){
            cb(
                new Error(
                    "El formato de archivo para la imagen no esta soportado, tiene que subir una imagen con extension jpg, jpeg, png o pneg"
                ),
                false
            );
            return;
        }

        cb(null, true);
    }
});