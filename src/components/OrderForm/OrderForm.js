import React, { Component } from 'react'

import styles from './OrderForm.styl'
import Radio from './Radio'

export default class OrderForm extends Component {
  render() {
    const { menu } = this.props.value
    const coffeeTypes = menu.types.map((type, key) =>
      <Radio name="type" id={key} key={key} value={type} />
    )
    const coffeeSizes = menu.sizes.map((size, key) =>
      <Radio name="size" id={key} key={key} value={size} />
    )
    const coffeeSugar = menu.sugar.map((sugar, key) =>
      <Radio name="sugar" id={key} key={key} value={sugar} />
    )
    return (
      <div className="order-form">
        <form
          className="order-form-widget"
          ref="form"
          onSubmit={this.placeOrder.bind(this)} action="">

          <div className="form-group">
            <h4 className="order-form-desc">My name is...</h4>
            <input 
              required
              name="name"
              type="text" 
              className="order__input form-control" 
              placeholder="Jim Sleepyhead" 
            />
          </div>
          
          <div className="form-group">
            <h4 className="order-form-desc">Coffee Type</h4>
            <div className="radio__list">
              {coffeeTypes}
            </div>
          </div>

          <div className="form-group">
            <h4 className="order-form-desc">Size</h4>
            <div className="radio__list">
              {coffeeSizes}
            </div>
          </div>

          <div className="form-group">
            <h4 className="order-form-desc">Sugar?</h4>
            <div className="radio__list">
              {coffeeSugar}
            </div>
          </div>

          <button 
            className="btn btn-block btn-success btn-lg button__submit"
            type="submit">Yes please!</button>
        </form>
      </div>
    )
  }

  placeOrder(e) {
    e.preventDefault()
    // input field values
    let fields = e.target.elements
    let name = fields.name.value
    let type = fields.type.value
    let size = fields.size.value
    let sugar = fields.sugar.value
    // order object
    let data = {
      id: this.props.value.currentOrder.length,
      name: name,
      type: type,
      size: size,
      sugar: sugar
    }
    // action dispatch
    this.props.addOrder(data)
    // form reset
    this.refs.form.reset()
  }
}