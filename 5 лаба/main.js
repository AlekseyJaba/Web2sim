const http = require("http");
const { url } = require("inspector");
const HOST = '127.0.0.1';
const PORT = 3000;
const server = http.createServer((req, res) =>{
    const url = req.url
    const name = req.headers
    const method = req.method
    const err = "ОШИБКА"
    switch(url){
        case '/':
           

    }
});