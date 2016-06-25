// ACTIONS
export const ADD_ORDER = 'ADD_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'

export function addOrder(data) {
  return {
    type: ADD_ORDER,
    item: {
      id: data.id,
      name: data.name,
      type: data.type,
      size: data.size,
      sugar: data.sugar
    }
  }
}

export function removeOrder(id) {
  return {
    type: REMOVE_ORDER,
    id
  }
}