import {
  FETCH_WORKSTATIONS_START,
  FETCH_WORKSTATIONS_END,
  BOOK_WORKSTATION,
  SET_DATE
} from './constants';
import { createReducer } from 'redux/utils';

import moment from 'moment';

// Initial state
const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false,
  date: moment().format('MM DD YYYY'),
};

// Reducer
export default createReducer(INITIAL_STATE, {
  [SET_DATE](state, action) {
    return {
      ...state,
      date: action.payload,
    };
  },

  [FETCH_WORKSTATIONS_START](state, action) {
    return {
      ...state,
      loading: true
      };
  },
  [FETCH_WORKSTATIONS_END](state, action) {
    if (action.error) {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }

    return {
      ...state,
      loading: false,
      list: action.payload,
    }
  },
  [BOOK_WORKSTATION](state, action) {
    // { id: 23, free: false }
    const { id, free } = action.payload;
    const list = state.list.slice();
    const workstation = list.findIndex(ws => ws.id === id);
    list[workstation] = {
      ...list[workstation],
      free,
    }
    return {
      ...state,
      list,
    }
  },
});