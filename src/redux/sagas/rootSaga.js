import { takeLatest } from 'redux-saga/effects';
import { GET_CALENDAR } from 'redux/reducers/calendar';
import { GET_ARTISTS } from 'redux/reducers/artists';
import { handleGetCalendar } from './calendar';
import { handleGetArtists } from './artists';

export function* watcherSaga() {
  yield takeLatest(GET_CALENDAR, handleGetCalendar);
  yield takeLatest(GET_ARTISTS, handleGetArtists)
}