import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import StyledGlobal from "./styled-components/styled-global/styled-global";



ReactDOM.render(
  <React.StrictMode>
    <StyledGlobal/>
    <App/>
  </React.StrictMode>,
  document.querySelector('#root')
);


reportWebVitals();
