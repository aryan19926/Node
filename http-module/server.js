const http = require("http");

const server = http.createServer((req, res) => { // req is the request object and res is the response object
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/plain" }); // 200 is the status code and "Content-Type": "text/plain" is the header
    res.end("Hello World"); // end the response
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});