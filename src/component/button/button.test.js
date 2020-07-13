import React from 'react';
import { findByTestAttr, checkProps } from '../../../utils/';
import { shallow } from 'enzyme';
import SharedButton from './index';

describe('Shared Button Component', () => {

    describe('Check proptypes', () => {

        test('Should NOT throw warnings', () => {
            const expectedProps = {
                buttonText: 'test string',
                onClickEvent: () => {

                }
            };
            const errors = checkProps(SharedButton, expectedProps);
            expect(errors).toBe(undefined);
        })
    })

    describe('Shared Button Component Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'test string',
                onClickEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props} />);
        });

        test('Should render a button correctly', () => {
            const button = findByTestAttr(wrapper, 'sharedButton');
            expect(button.length).toBe(1);
        });

        test('Should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'sharedButton');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(0);
        });
    });
})