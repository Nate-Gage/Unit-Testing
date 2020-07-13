import moxios from 'moxios';
import { testStore } from '../../utils/index';
import { fetchPosts } from '../actions/index';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        
        const expectedState = [{
            title: 'test Title 1',
            body: 'test Body 1'
        }, {
            title: 'test Title 2',
            body: 'test Body 2'
        }, {
            title: 'test Title 3',
            body: 'test Body 3'
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            // getState fetches the combined reducers in reducers/index.js
            expect(newState.PostsReducer).toBe(expectedState);
        })
    });
});