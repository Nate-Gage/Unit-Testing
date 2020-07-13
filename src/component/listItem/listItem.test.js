import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils/';
import ListItem from './index';

describe('List Item Component', () => {

    describe('Check PropTypes', () => {

        test('Should not throw errors', () => {
            const expectedProps = {
                title: "test title",
                description: "test description"
            };
            const propErrors = checkProps(ListItem, expectedProps);
            expect(propErrors).toBe(undefined);
        })
    })

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: "test title",
                description: "test description"
            }
            wrapper = shallow(<ListItem {...props} />);
        })

        test('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'listItem');
            expect(component.length).toBe(1);
        })

        test('Should render title', () => {
            const title = findByTestAttr(wrapper, 'listItemTitle');
            expect(title.length).toBe(1);
        })

        test('Should render a description', () => {
            const description = findByTestAttr(wrapper, 'listItemDesc');
            expect(description.length).toBe(1);
        })

    })

    describe('Component Does Not Render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                description: "test description"
            }
            wrapper = shallow(<ListItem {...props} />);
        })

        test('Should not render without title', () => {
            const component = findByTestAttr(wrapper, 'listItemTitle');
            expect(component.length).toBe(0);
        })
    })
})

