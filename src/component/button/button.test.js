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

    describe('Shared Button Component', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'test string',
                onClickEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        test('Should render correctly', () => {
            const button = findByTestAttr(wrapper, 'sharedButton');
            expect(button.length).toBe(1);
        })
    })

})