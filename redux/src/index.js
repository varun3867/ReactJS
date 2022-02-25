import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//create store is used to create the store
//applyMiddleware used to apply the middlewares like thunk, saga
import {createStore,applyMiddleware, combineReducers} from "redux";
//omporting thunk middleware
import thunk from "redux-thunk";
//importing reducer
import {productsReducer} from "./reducer/reducerProducts"
//we have created store using createStore. to make store available to the App Component
//we need to import provider
import {Provider} from "react-redux";

import { loginReducer } from './reducer/loginReducer';

const rootReducer =  combineReducers({
  login : loginReducer,
  product : productsReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
