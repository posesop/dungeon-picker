import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import workstationsReducer from './workstations/reducer';
import modalReducer from './modal/reducer';

export default combineReducers({
    workStations: workstationsReducer,
    router: routerReducer,
    modal: modalReducer
});
