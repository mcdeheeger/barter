import React from 'react';
import ReactDOM from 'react-dom';
import './views/assets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RouteConfigExample from './config/routes'

ReactDOM.render(<RouteConfigExample />, document.getElementById('root'));
registerServiceWorker();
