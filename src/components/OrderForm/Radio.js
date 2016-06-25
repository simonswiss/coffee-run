import React, { Component } from 'react'

export default class Radio extends Component {
  render() {
    const { value, name, id } = this.props
    return (
      <div 
        key={id}
        className="radio__wrapper"
      >
        <label 
          key={id} 
          className="radio__label"
        >
          <input 
            required
            className="radio__input"
            type="radio"
            name={name}
            defaultValue={value} 
          /> 
          <span className="radio__text">{value}</span>
        </label>
      </div>
    )
  }
}