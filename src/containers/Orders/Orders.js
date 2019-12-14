import React, { useEffect } from 'react'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '.././../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

const Orders = props => {
  useEffect(() => {
    props.onFetchOrders()
  }, [])


  let orders = <Spinner />
  if (!props.loading) {
    orders = props.orders.map(order => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price} />
    ))
  }
  return orders

}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));