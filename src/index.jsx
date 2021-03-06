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
import thunk from 'redux-thunk';
import multi from 'redux-multi';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools);
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);