import axios from 'axios';
import { call, put } from 'redux-saga/effects'
import { setCalendar } from '../reducers/calendar'

export function requestGetCalendar() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:8081/calendar'
  })
}

export function* handleGetCalendar() {
  try {
    const response = yield call(requestGetCalendar)
    const { data } = response
    yield put(setCalendar(data))
  } catch (error) {
    console.log(error)
  }
}