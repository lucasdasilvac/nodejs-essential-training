const fs = require("fs");

fs.mkdir("storage-files", err => {
    if(err) {
        throw err;
    }

    console.log("directory created");
});
