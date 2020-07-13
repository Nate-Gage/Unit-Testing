import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../headline/';
import { findByTestAttr, checkProps } from '../../../utils/index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('Check PropTypes', () => {

        test('Should not throw warning', () => {
            const expectedProps = {
                header: 'Test Header',
                description: 'Test Description',
                tempArray: [{
                    name: 'test name',
                    age: 88,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBe(undefined); 
        });
    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const testProps = {
                header: 'test header',
                description: 'some test description'
            };

            wrapper = setUp(testProps);
        })

        test('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        })

        test('Should render an header <h1> without errors', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        test('Should render a description <p> without errors', () => {
            const desc = findByTestAttr(wrapper, 'description');
            expect(desc.length).toBe(1);
            //hi
        })
    });

    describe('Have no props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        test('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        })
    });

});