import React, { Component } from 'react'


class RadioInput extends Component {
  render() {
    const { value, name, key } = this.props
    return (
      <label 
        key={key} 
        className="radio-inline"
      >
        <input 
          type="radio"
          name={name}
          value={value} 
        /> 
        {value}
      </label>
    )
  }
}

export default class OrderForm extends Component {
  render() {
    let { menu } = this.props.value
    
    let coffeeTypes = menu.types.map((coffee, key) =>
      <RadioInput name="coffee" ref="coffee" key={key} value={coffee} />
    )

    let coffeeSizes = menu.sizes.map((size, key) =>
      <RadioInput name="size" ref="size" key={key} value={size} />
    )

    let coffeeSugar = menu.sugar.map((sugar, key) =>
      <RadioInput name="sugar" ref="sugar" key={key} value={sugar} />
    )

    return (
      <div className="container">
        <form onSubmit={this.placeOrder.bind(this)} action="">
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

          <button 
            className="btn btn-success"
            type="submit" onClick={this.placeOrder.bind(this)}>Place Order</button>
        </form>
      </div>
    )
  }
  placeOrder(e) {
    e.preventDefault()
    let data = {
      id: this.props.value.currentOrder.length,
      name: this.refs.name.value,
      type: 'Latte',
      size: 'Large',
      sugar: 1
      // name: this.refs.name.value,
      // type: this.refs.coffee.value,
      // size: this.refs.size.value,
      // sugar: this.refs.sugar.value
    }

    console.log(data)
    this.props.addOrder(data)
  }
}