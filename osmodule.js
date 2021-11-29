var os = require("os");

console.log("Architecture :"+os.arch());
console.log("Number of CPUS "+JSON.stringify(os.cpus()));
console.log("free memory :"+os.freemem() + "bytes");