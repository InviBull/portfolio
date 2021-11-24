import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  return (
    <h1>Hello!</h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);