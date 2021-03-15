import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {SuperProvider} from "./context"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <SuperProvider>
    <Router>
    <App />,
    </Router>
  </SuperProvider>,
  document.getElementById('root')
);


reportWebVitals();
