import React from 'react';
import './App.css';
import { Alert } from './Alert';

function App() {
  return (
    <div className="App">
      <Alert heading="Success" closable>
        Everything is really good!
      </Alert>
    </div>
  );
}

export default App;
