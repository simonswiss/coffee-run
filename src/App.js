import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderForm from './components/OrderForm';
import OrdersList from './components/OrdersList';

import { addOrder, removeOrder } from './actions'


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
      <div>
        <OrderForm 
          value={this.props.value} 
          addOrder={this.props.addOrder}
        />
        <hr />
        <OrdersList
          value={this.props.value} 
          removeOrder={this.props.removeOrder}
        />
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