import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// import {HashRouter as BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <HelmetProvider> */}
    {/* <I18nextProvider i18n={i18n}> */}
      <Suspense fallback={<div>Loading...</div>}>
        
      
        <App />
      </Suspense>
    {/* </I18nextProvider> */}
    {/* </HelmetProvider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
