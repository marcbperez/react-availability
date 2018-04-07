import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Service from './Service'

/* Service configuration. */
const service = new Service(
  'https://private-anon-064a9a4cb7-housekeepavailability.apiary-mock.com');

/* Render main application. */
ReactDOM.render(
  <App service={service} />,
  document.getElementById('root')
);
