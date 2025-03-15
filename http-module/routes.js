const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>HOME PAGE</h1>");
        res.end();
    }
    else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>My name is Aryan</h1>");
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 NOT FOUND</h1>");
        res.end();
    }
})


const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
)