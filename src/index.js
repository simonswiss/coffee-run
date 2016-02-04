import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import { ADD_ORDER, REMOVE_ORDER } from './actions';

// DEFAULT STATE
const defaultState = {
  menu : {
    types: ['Latte', 'Long Black', 'Flat White', 'Cappuccino', 'Ice Coffee'],
    sizes: ['Small', 'Regular', 'Large'],
    sugar: [0, 1, 2, 3, 'seriously??']
  },
  currentOrder: []
}

// REDUCER
const orders = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return Object.assign({}, state, { 
        currentOrder: state.currentOrder.concat(action.item) 
      })
    case 'REMOVE_ORDER':
      return Object.assign({}, state, {
        currentOrder: state.currentOrder.filter( order => order.id !== action.id )
      })
    default:
      return state
  }
}

const store = createStore(orders)

const render = () => (
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root')
  )
);

store.subscribe(render);
render();