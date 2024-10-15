const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) =>{

    const stream = fs.createReadStream("new.txt")
    stream.pipe(res)
    // fs.readFile("new.txt", (err, data) => {
    //     res.end(data);
    // })
} );

server.listen(3000)