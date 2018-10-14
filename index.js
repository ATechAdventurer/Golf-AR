const io = require('socket.io')(80);

var player1 = [];
var player2 = [];

io.on('connection', function(socket){
    socket.on('update', function(msg){
        var {construction, shot} = msg;
        
        io.emit('update', {player1, player2});
    })
})

