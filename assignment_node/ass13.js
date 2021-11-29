var dns = require("dns");
const {hostname}= require("os");

dns.lookup('www.google.co.in',(err,address,family)=>{
    console.log("address :"+address);
    console.log("family"+family);
})

dns.resolve4('www.swiggy.com',(err,addresses)=>{
    if(err) throw err;

    console.log("all the i[ addresses of www.swiggy.com"+JSON.stringify(addresses));

    addresses.forEach((a)=>
    {
        dns.reverse(a,(err,hostname)=>{
            if (err) throw err;
            console.log(`IP address :${a} and its hostname : ${hostname}`);
        })
    })
})