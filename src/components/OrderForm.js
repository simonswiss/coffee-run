import React, { Component } from 'react'


const RadioInput = ({key, value}) => (
  <label 
    key={key} 
    className="radio-inline"
  >
    <input 
      type="radio" 
      name="coffee" 
      value={value} 
    /> 
    {value}
  </label>
)

export default class OrderForm extends Component {
  render() {
    let { menu } = this.props.value
    
    let coffeeTypes = menu.types.map((coffee, key) =>
      <RadioInput key={key} value={coffee} />
    )

    let coffeeSizes = menu.sizes.map((coffee, key) =>
      <RadioInput key={key} value={coffee} />
    )

    let coffeeSugar = menu.sugar.map((coffee, key) =>
      <RadioInput key={key} value={coffee} />
    )

    return (
      <div className="container">
        <form action="">
          <div className="form-group">
            <label>Your name</label>
            <input type="text" ref="name" className="form-control" placeholder="Johny Sleepyhead" />
          </div>
          
          <div className="form-group">
            {coffeeTypes}
          </div>

          <div className="form-group">
            {coffeeSizes}
          </div>

          <div className="form-group">
            {coffeeSugar}
          </div>

          <button type="submit" onClick={this.placeOrder.bind(this)}>Place Order</button>
        </form>
      </div>
    )
  }
  placeOrder(e) {
    e.preventDefault()
    let data = {
      id: this.props.value.currentOrder.length,
      name: 'Hello',
      type: 'latte',
      size: 'large',
      sugar: 1
    }
    this.props.addOrder(data)
  }
}