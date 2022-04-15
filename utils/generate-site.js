const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {     
            // if error occurs, reject Promise and send error to Promises' .catch method
            if (err) {
                reject(err);
                // return out of the function to ensure Promise doesn't accidentally execute resolve aswell
                return;
            }
    
            // if successful (no errors) resolve Promise and send successful data to .then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message:'File copied!'
            });
        });
    });
};

// export both functions as an object used as methods
// using shorthand property names, understands that the property name and value are the same
module.exports = { writeFile, copyFile };
//  ^^^^^
//  module.exports = {
//     // object: method
//     writeFile: writeFile,
//     copyFile: copyFile
// };