import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRouter from './routes/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);