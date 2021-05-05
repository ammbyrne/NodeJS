const http = require('http');
// const fs = require('fs');
const url =require('url');

/* function message(greeting, callback) {
    console.log(greeting);
    callback();
}

function afterwards() {
    console.log('Goodbye');
}

message('hello', afterwards);

function message2(callback) {
    console.log('message');
    callback();
}

function afterwards2() {
    console.log('Goodbye');
}
message2(afterwards); */

/* function req(request,response) { 
    fs.readFile('index.html', function(err,data) {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(data);
    response.end();
    })
} */

function req(request,response) { 
    const base =url.parse(request.url);
    const pathname = base.pathname; 
    const fileName = '.' + pathname;  
    console.log(base + ' is base received');
    console.log(pathname + ' is pathname received');
    console.log(fileName + ' is file name received with path');

    fs.readFile('index.html', function(err,data) {
        if(err){ 
            response.writeHead(404, {'Content-Type':'text/html'});
            return response.end('<h1>Not Found</h1>');        
        }
    });
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(data);
    return response.end();
}
http.createServer(req).listen(8000);
console.log('Server started ')