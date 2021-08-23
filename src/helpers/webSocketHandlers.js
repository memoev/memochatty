const socket = new WebSocket('wss://memochatty.herokuapp.com//ws');

const establishNewConnection = () => {
    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    });
}

// Listen for messages
const chatListener = () => {
    
}

const sendChatMessage = (mssg) => {
    socket.send(mssg);
}

export {
    socket,
    establishNewConnection,
    chatListener,
    sendChatMessage
}