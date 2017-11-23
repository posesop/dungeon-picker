import React from 'react';
import { shallow } from 'enzyme';
import TaskDetailPage from 'components/pages/TaskDetailPage';

describe('TaskDetailPage component', () => {
    it('Should render without breaking', () => {
        const componentInstance = shallow(<TaskDetailPage />);
        expect(componentInstance).not.toBeUndefined();
    });
});