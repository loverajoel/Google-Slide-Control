var express = require("express");
var path = require("path");
var app = express();

//configure
app.configure(function(){
	app.use(express.static(path.join(__dirname,'public')));
})

//router
app.get('/remote',function(req,res){
	res.sendfile('./views/remote.html');
})
app.get('/presentation',function(req,res){
	res.sendfile('./views/events.html');
})

//init
var server = app.listen(8881);
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
	socket.on('remoteEvent', function(data){
        io.sockets.emit('actionEvent', data);
   });
})
