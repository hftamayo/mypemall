import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import QueryProvider from './queryClient/QueryProvider';
import { Auth0Provider } from '@auth0/auth0-react'

//parametros de Auth0
const domain = 'dev-6s99fvic.us.auth0.com';
const clientId = 'CWZW3YcaU5A8rPlbeaqnTRufcaIOpzQJ';
const redirectUri = window.location.origin;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
          <App />
        </Auth0Provider>
      </QueryProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
