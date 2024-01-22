import React from 'react';
import ReactDOM from 'react-dom/client';
// Supports weights 300-900
import '@fontsource-variable/figtree';

// Supports weights 100 - 900
import '@fontsource/roboto';
import './index.scss';
import App from './App';

// redux store
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
