import { createStore } from 'redux';

import orders from '../reducers/index'

const store = createStore(orders)

export default store