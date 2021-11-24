// first install npm install readline-sync

var readline = require("readline-sync");

var data = 0;

data = readline.question("Enter a number");
console.log("given input data "+data);

for(var i=1;i<=data;++i)
console.log(i)