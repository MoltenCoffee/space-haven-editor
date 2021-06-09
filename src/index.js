import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from './reportWebVitals';
import sendToGoogleAnalytics from "./lib/sendToGoogleAnalytics";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals(sendToGoogleAnalytics);
