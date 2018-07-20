/**
|--------------------------------------------------
| Import modules
|--------------------------------------------------
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

/**
|--------------------------------------------------
| Import components
|--------------------------------------------------
*/
import App from './main/app';
import reducers from './main/reducers';

/**
|--------------------------------------------------
| Import middlewares
|--------------------------------------------------
*/
import promise from 'redux-promise';

const store = applyMiddleware(promise)(createStore)(reducers);
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);