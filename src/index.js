import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import portfolioManagementPortalInfo from './reducer/reducers';

import App from './App';
import './index.css';

let store = createStore(portfolioManagementPortalInfo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
