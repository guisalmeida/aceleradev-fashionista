import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);

serviceWorker.register();