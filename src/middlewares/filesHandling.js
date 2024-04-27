const multer = require('multer');
const path = require('path');

 const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.resolve(__dirname, '../../public/images/')
        cb(null, destinationPath); // Set destination folder
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname); // Get the original file extension
        const filename = `${Date.now()}${extension}`; // Generate a unique filename
        cb(null, filename); // Set the filename for the uploaded file
    }
});
module.exports = storage