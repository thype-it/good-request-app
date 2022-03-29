import React from 'react';
import ReactDOM from 'react-dom';
import { StateMachineProvider } from "little-state-machine";

import { BrowserRouter as Router } from 'react-router-dom';


import './index.scss';
import App from './App';

ReactDOM.render(
  <StateMachineProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
    </StateMachineProvider>,
  document.getElementById('root')
);