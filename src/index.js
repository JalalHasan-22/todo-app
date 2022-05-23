import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import SettingsProvider from './context/settings';
import AuthProvider from './context/auth';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const root = document.getElementById('root');

ReactDOM.render(
  <SettingsProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </SettingsProvider>,
  root
);
