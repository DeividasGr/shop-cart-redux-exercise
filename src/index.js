import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import cartItems from './cart-items';

const initialStore = {
  cart: cartItems,
  total: 758,
  amount: 0,
};

const store = createStore(reducer, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
