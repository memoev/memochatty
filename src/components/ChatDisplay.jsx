import React, { useEffect, useState } from 'react';
import { socket } from '../helpers/webSocketHandlers';
  
function ChatDisplay() {

  useEffect(() => {
    socket.addEventListener('message', function (event) {
      console.log('Message from server here:', event.data);
      let el = document.createElement('li');
      el.innerText = event.data;
      document.querySelector('ul').appendChild(el);
    });
  }, []);

  return (
    <div>
      <ul>
      </ul>
    </div>
  );
}

export default ChatDisplay;