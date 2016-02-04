import React, { Component } from 'react'
import scrollToElement from 'scroll-to-element'

import styles from './OrderForm.styl'

export default class OrderForm extends Component {
  render() {
    const { menu } = this.props.value
    const coffeeTypes = menu.types.map((type, key) =>
      <RadioInput name="type" key={key} value={type} />
    )
    const coffeeSizes = menu.sizes.map((size, key) =>
      <RadioInput name="size" key={key} value={size} />
    )
    const coffeeSugar = menu.sugar.map((sugar, key) =>
      <RadioInput name="sugar" key={key} value={sugar} />
    )
    return (
      <div className="order-form">
        <div className="container">
          <div className="row">
            <h1 className="order-form-title">¯\_(ツ)_/¯ - coffee time!</h1>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

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
                    className="form-control" 
                    placeholder="Jim Sleepyhead" 
                  />
                </div>
                
                <div className="form-group">
                  <h4 className="order-form-desc">Coffee Type</h4>
                  {coffeeTypes}
                </div>

                <div className="form-group">
                  <h4 className="order-form-desc">Size</h4>
                  {coffeeSizes}
                </div>

                <div className="form-group">
                  <h4 className="order-form-desc">Sugar?</h4>
                  {coffeeSugar}
                </div>

                <button 
                  className="btn btn-block btn-success btn-lg"
                  type="submit">Yes please!</button>
              </form>

            </div>
          </div>
          <div className="order-form-link-wrapper">
            <a 
              className="order-form-link" 
              href="#"
              onClick={this.scrollTo.bind(this)}>View Orders List</a>
          </div>
        </div>
      </div>
    )
  }
  scrollTo(e) {
    e.preventDefault()
    const target = document.getElementById('ordersList')
    scrollToElement(target)
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

class RadioInput extends Component {
  render() {
    const { value, name, key } = this.props
    return (
      <label 
        key={key} 
        className="radio-inline"
      >
        <input 
          required
          type="radio"
          name={name}
          defaultValue={value} 
        /> 
        {value}
      </label>
    )
  }
}