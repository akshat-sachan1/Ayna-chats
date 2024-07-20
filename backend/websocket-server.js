const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

const clients = new Map();

server.on('connection', (ws, req) => {
  const userId = req.url.split('/').pop(); 
  clients.set(userId, ws);

  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    const recipientWs = clients.get(parsedMessage.recipientId);

    if (recipientWs && recipientWs.readyState === WebSocket.OPEN) {
      recipientWs.send(JSON.stringify(parsedMessage));
    }
  });

  ws.on('close', () => {
    clients.delete(userId);
  });

  ws.send(JSON.stringify({ message: 'Welcome to the chat server!' }));
});
