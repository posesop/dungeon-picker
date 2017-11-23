import { OPEN, CLOSE } from './constants';
import { createReducer } from 'redux/utils';

/* Initial state */
const INITIAL_STATE = {
    child: null,
    childProps: {}
};

/* Reducer */
export default createReducer(INITIAL_STATE, {

    [OPEN](state, action) {
        return {
            child: action.payload.child,
            childProps: action.payload.childProps
        };
    },
    
    [CLOSE](state, action) {
        return {...INITIAL_STATE };
    }

});

/* Selectors */
export const getModal = state => state.modal;