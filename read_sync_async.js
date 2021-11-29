var fs = require("fs");

fs.readFile('readfile.txt',function (err,data){
    if(err)
        console.log("there is an error "+err)
    else    
        console.log("read data in asynchronous is :"+data);
})

var data = fs.readFileSync('readfile.txt')
console.log("read data in sychronous way :"+data);