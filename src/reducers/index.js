import defaultState from '../data/index'

const orders = (state = defaultState, action) => {
  switch (action.type) {
    
    case 'ADD_ORDER':
      return {
        ...state,
          currentOrder: state.currentOrder.concat(action.item)
      }
    
    case 'REMOVE_ORDER':
      return {
        ...state,
        currentOrder: state.currentOrder.filter( order => order.id !== action.id )
      }
    
    default:
      return state
  }
}

export default orders