import * as types from 'redux/entities/constants';
import reducer from 'redux/entities/reducer';

describe('Entities reducer', () => {

    xit('Should return the initial state', () => {

        const initialState = {
            // Initial state has mocked normalized data!
        };

        expect(reducer(undefined, {})).toEqual(initialState);

    });

    it('Should handle MERGE_ENTITIES action', () => {

        const previousState = {
            result: [0],
            tasks: {
                0: {}
            }
        };
        
        const expectedState = {
            result: [0, 1],
            tasks: {
                0: {},
                1: {}
            }
        };

        const action = {
            type: types.MERGE_ENTITIES,
            entityId: 1,
            payload: {
                1: {}
            }
        };

        expect(reducer(previousState, action)).toEqual(expectedState);

    });

    it('Should handle REMOVE_ENTITY action', () => {

        const previousState = {
            result: [0, 1],
            tasks: {
                0: {},
                1: {}
            }
        };
        
        const expectedState = {
            result: [1],
            tasks: {
                1: {}
            }
        };

        const action = {
            type: types.REMOVE_ENTITY,
            payload: {
                id: 0,
                entity: 'tasks'
            }
        };

        expect(reducer(previousState, action)).toEqual(expectedState);
    });

});