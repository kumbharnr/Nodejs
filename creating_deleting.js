var fs = require('fs');

fs.mkdirSync("NewFolder");
console.log("new directory is created with name of newfolder...")

fs.rmdirSync('NewFolder');
console.log("new folder is deleted")