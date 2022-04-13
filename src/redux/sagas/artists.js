import axios from 'axios';
import { call, put } from 'redux-saga/effects'
import { setArtists } from '../reducers/artists'

export function requestGetArtists() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:8081/artists'
  })
}

export function* handleGetArtists() {
  try {
    const response = yield call(requestGetArtists)
    const { data } = response
    yield put(setArtists(data))
  } catch (error) {
    console.log(error)
  }
}