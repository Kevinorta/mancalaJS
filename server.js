'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, '/index.html');

const server = express()
    .use((req, res) => res.sendFile(INDEX))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({
    server
});


global.player = 1;
global.clients = [];

console.log("HELLO");
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send("You have connected")
    clients[global.player] = ws;
    if (player == 1) {
        player++;
    } else {
        clients[1].send("Player two has joined you")
    }


    ws.on('message', function incoming(message) {
        //        console.log('received: %s', message);
        if (message.includes("msg ")) {

            wss.clients.forEach(function each(client) {

                client.send(str.substring('msg '.length));

            });

        }
    });



});








//var ws = require("nodejs-websocket");
//
//
//
//global.player = 1;
//global.clients = [];
//// Scream server example: "hi" -> "HI!!!" 
//var server = ws.createServer(function (conn) {
//
//
//    clients[global.player] = conn;
//    conn.sendText("Hello player " + player + ". What is your name?")
//    clients[player] = conn;
//    if (player == 1) {
//        player++;
//    } else {
//        clients[1].sendText("Player two has joined you")
//    }
//
//
//
//    conn.on("text", function (str) {
//        if (str.includes("msg ")) {
//            server.connections.forEach(function (conn) {
//                conn.sendText(str.substring('msg '.length))
//            })
//
//        }
//    })
//    conn.on("close", function (code, reason) {
//        console.log("Connection closed")
//    })
//
//}).listen(process.env.PORT || 5000)
