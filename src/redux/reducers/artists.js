/* eslint-disable no-case-declarations */
export const GET_ARTISTS = 'GET_ARTISTS'
export const SET_ARTISTS = 'SET_ARTISTS'

export const getArtists = () => ({
  type: GET_ARTISTS
})

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
})

const initialState = {
  artists: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      const { artists } = action;
      return { ...state, artists };
    default:
      return state;
  }
};