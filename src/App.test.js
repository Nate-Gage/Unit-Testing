import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../utils/';

const setup = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            PostsReducer: [{
                title: 'title 1',
                body: 'body 1'
            },
            {
                title: 'title 2',
                body: 'body 2'
            },{
                title: 'title 3',
                body: 'body 3'
            }]
        }
        wrapper = setup(initialState);
    });

    test('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })
})
