import * as actions from 'redux/entities/actions';
import * as types from 'redux/entities/constants';

describe('Entities actions', () => {
    it('Should create an action to add a task', () => {

        const task = {
            id: 20,
            name: 'Task 1',
            priority: 0,
            owner: 'Pepe'
        };

        const expectedAction = {
            type: types.MERGE_ENTITIES,
            entityId: task.id,
            payload: {
                [task.id]: task
            }
        };

        expect(actions.addTask(task)).toEqual(expectedAction);
    });

    it('Should create an action to remove a task', () => {

        const id = 20;

        const expectedAction = {
            type: types.REMOVE_ENTITY,
            payload: {
                id,
                entity: 'tasks'
            }
        };

        expect(actions.removeTask(id)).toEqual(expectedAction);
    });
});