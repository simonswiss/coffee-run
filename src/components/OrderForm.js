import React, { Component } from 'react'

export default class OrderForm extends Component {
  render() {
    let { menu } = this.props.value
    let coffeeTypes = menu.types.map((type, key) =>
      <RadioInput name="type" key={key} value={type} />
    )
    let coffeeSizes = menu.sizes.map((size, key) =>
      <RadioInput name="size" key={key} value={size} />
    )
    let coffeeSugar = menu.sugar.map((sugar, key) =>
      <RadioInput name="sugar" key={key} value={sugar} />
    )
    return (
      <div className="order-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

              <form
                className="order-form-widget"
                ref="form"
                onSubmit={this.placeOrder.bind(this)} action="">

                <div className="form-group">
                  <label>Your name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    className="form-control" 
                    placeholder="Johny Sleepyhead" 
                  />
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
                  className="btn btn-block btn-success btn-lg"
                  type="submit">Yes please!</button>
              </form>

            </div>
          </div>
        </div>
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