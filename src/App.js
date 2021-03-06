import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderForm from './components/OrderForm/OrderForm';
import OrdersList from './components/OrdersList/OrdersList';

import { addOrder, removeOrder } from './actions/index'

import styles from './styles/styles.styl'


// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    value: state
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    addOrder: (data) => dispatch(addOrder(data)),
    removeOrder: (id) => dispatch(removeOrder(id))
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="order-form-title">¯\_(ツ)_/¯ - coffee time!</h1>
        <div className="row">
          <div className="col-sm-6">
            <OrderForm 
              value={this.props.value} 
              addOrder={this.props.addOrder}
            />
          </div>
          <div className="col-sm-6">
            <OrdersList
              value={this.props.value} 
              removeOrder={this.props.removeOrder}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    // console.log(this.props.value.currentOrder)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);