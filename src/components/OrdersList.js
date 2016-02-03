import React, { Component } from 'react'

export default class OrdersList extends Component {
  render() {
    let ordersList = this.props.value.currentOrder.map((order, key) => {
      const { id, name, type, size, sugar } = order
      return (
        <tr key={key} id={id}>
          <td>{name}</td>
          <td>{type}</td>
          <td>{size}</td>
          <td>{sugar}</td>
          <td>
            <button 
              className="btn btn-danger btn-xs"
              onClick={this.deleteOrder.bind(this, id)}>Delete</button>
          </td>
        </tr>
      )
    })
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Coffee</th>
              <th>Size</th>
              <th>Sugar?</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {ordersList}
          </tbody>
        </table>
      </div>
    )
  }
  deleteOrder(id) {
    this.props.removeOrder(id)
  }
}