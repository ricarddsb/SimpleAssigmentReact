import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { App } from 'containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from '../store/configureStore';

((window) => {
  const store = configureStore();
  let app = document.getElementById('react-view');

  if (!app) {
    app = document.createElement('div');
    app.id = 'react-view';
    window.document.body.appendChild(app);
  }
  render(<Provider store={store}><App /></Provider>, app);
})(window);
