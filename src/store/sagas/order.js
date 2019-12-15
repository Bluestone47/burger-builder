import { put } from 'redux-saga/effects'

import * as actions from '../actions/index'
import axios from '../../axios-orders'

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post('/orders.json', action.orderData)
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData))
  } catch (error) {
    yield put(actions.purchaseBurgerFailed(error))
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrderStart());
  try {
    const response = yield axios.get('/orders.json')
    const fetchedOrders = []
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key
      })
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders))
  } catch (error) {
    yield put(actions.fetchOrdersFail(error))
  }
}