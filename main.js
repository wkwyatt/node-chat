var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    fs.readFile('client.html', 'utf-8', function (error, data){
    	response.writeHead(200, { 'content-type':'text/html' });
    	response.write(data);
        respnose.end();
    })
});

server.listen(21000);

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
	socket.on('message_to_server', function(data) {
		io.sockets.emit('message_to_client', {
			message: data["message"];
		})
	});
});