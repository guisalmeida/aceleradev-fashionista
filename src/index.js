import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App tab="home" />
    </BrowserRouter>
  </Provider>
);

serviceWorker.register();