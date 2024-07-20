const { exec } = require('child_process');

module.exports = async () => {
  // Start the WebSocket server
  exec('node websocket-server.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting WebSocket server: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`WebSocket server stderr: ${stderr}`);
      return;
    }
    console.log(`WebSocket server stdout: ${stdout}`);
  });
};
