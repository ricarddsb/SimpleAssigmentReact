import React from 'react';
import { render } from 'react-dom';
import { App } from 'containers';

((window) => {
  let app = document.getElementById('react-view');

  if (!app) {
    app = document.createElement('div');
    app.id = 'react-view';
    window.document.body.appendChild(app);
  }
  render(<App />, app);
})(window);
