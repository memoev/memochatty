import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { establishNewConnection } from './helpers/webSocketHandlers';
import ChatInput from './components/ChatInput';
import ChatDisplay from './components/ChatDisplay';

function App() {

  useEffect(_ => {
    establishNewConnection();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatDisplay />
        <ChatInput/>
      </header>
    </div>
  );
}

export default App;
