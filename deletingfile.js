var fs = require("fs");
fs.unlink('readfile.txt',function (err){
    if(err) throw err;

        console.log("file is deleted....");
})