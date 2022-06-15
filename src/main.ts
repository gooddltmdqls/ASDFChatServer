import { WebSocketServer } from 'ws';

import server from './server';

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log("Recieved a connection.");
    ws.send("Waiting for authentication...");

    ws.on("message", (msg) => {
        console.log("Recieved a message: " + msg);
        ws.send(msg);
    });
});