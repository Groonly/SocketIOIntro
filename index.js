var express = require('express');
var socket = require('socket.io');
//App setup
var app = express();
var std;
var server = app.listen(4000, function(){
  console.log('listen to reequests on port 4000');
});

//Running C++ file and handle output, displaying it in console
var execFile = require('child_process').execFile;
var program = "a";
var child = execFile(program,[], function(error, stdout, stderr){
    std = stdout.split("\n").map(std => Number(std));
    console.log('C++ program output ', stdout);
    return std;
});

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', (socket) =>{
  console.log('made socket connection', socket.id);
  //Handle chat event
  socket.on('chat', function(data){
    console.log(data);
    io.sockets.emit('chat', data);
  });
  //Detect typing
  socket.on('typing', function(data){
    if(data == 'Joel'){
      socket.broadcast.emit('typing', std[0]);
    }
    else{
      socket.broadcast.emit('typing', data);
  }
  });

});
