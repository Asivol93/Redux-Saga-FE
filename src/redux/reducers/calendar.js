/* eslint-disable no-case-declarations */
export const GET_CALENDAR = 'GET_CALENDAR'
export const SET_CALENDAR = 'SET_CAlENDAR'

export const getCalendar = () => ({
  type: GET_CALENDAR
})

export const setCalendar = (calendar) => ({
  type: SET_CALENDAR,
  calendar
})

const initialState = {
  calendar: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CALENDAR:
      const { calendar } = action;
      return { ...state, calendar };
    default:
      return state;
  }
};