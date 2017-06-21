import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
=======
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
