import React from 'react';
import { shallow } from 'enzyme';

import TaskList from 'components/Tasks/TaskList';
import TaskItem from 'components/Tasks/TaskItem';

describe('TaskList component', () => {
    it('Should render as many children as its "tasks" prop', () => {

        const tasks = [
            {
                id: 0,
                name: 'Task 1',
                priority: 1,
                owner: 'Pepe'
            },
            {
                id: 1,
                name: 'Task 2',
                priority: 1,
                owner: 'Pepe'
            },
            {
                id: 2,
                name: 'Task 2',
                priority: 1,
                owner: 'Pepe'
            }
        ];

        const wrapper = shallow(<TaskList tasks={tasks} />);
        
        expect(wrapper.find(TaskItem).length).toBe(tasks.length);
    });
});