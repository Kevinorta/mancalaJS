var ws = require("nodejs-websocket");


console.log("HELLO");
global.player = 1;
global.clients = [];
// Scream server example: "hi" -> "HI!!!" 
var server = ws.createServer(function (conn) {


    clients[global.player] = conn;
    conn.sendText("Hello player " + player + ". What is your name?")
    clients[player] = conn;
    if (player == 1) {
        player++;
    } else {
        clients[1].sendText("Player two has joined you")
    }



    conn.on("text", function (str) {
        if (str.includes("msg ")) {
            server.connections.forEach(function (conn) {
                conn.sendText(str.substring('msg '.length))
            })

        }
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })

}).listen(process.env.PORT || 5000)
