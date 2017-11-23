import {
  FETCH_WORKSTATIONS_START,
  FETCH_WORKSTATIONS_END,
  BOOK_WORKSTATION,
  SET_DATE
} from './constants';

import api from 'api/index.js';

// Action creators
export const fetchWorkStationsStart = () => ({
  type: FETCH_WORKSTATIONS_START
});

export const fetchWorkStationsEnd = (data, error) => {
  
  const action = { type: FETCH_WORKSTATIONS_END };
  
  if (error) {
    action.error = error;
  } else {
    action.payload = data;
  }
  return action;
};

export const bookWorkstation = (id, status) => ({
  type: BOOK_WORKSTATION,
  payload: {
    id,
    free: status,
  }
});

export const setDate = date => ({
  type: SET_DATE,
  payload: date,
})


// Thunks
export const fetchWorkStations = () => async (dispatch) => {
  dispatch(fetchWorkStationsStart());
  try {
    const data = await api.fetchWorkStations();
    dispatch(fetchWorkStationsEnd(data));
  } catch (error) {
    dispatch(fetchWorkStationsEnd(null, error));
  }
};