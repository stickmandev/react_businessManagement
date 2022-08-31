import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Store_&_State/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Router from './router'
import { AccessProvider } from './features/auths/accessToken';
import {GlobalStateProvider} from './Store_&_State/GlobalState'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <AccessProvider>
        <Provider store={store}>
          
            <Router />
          
        </Provider>
      </AccessProvider>
    </GlobalStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();