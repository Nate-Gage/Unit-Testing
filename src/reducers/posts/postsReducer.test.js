import { types } from '../../actions/types';
import PostsReducer from './PostsReducer';

describe('Posts Reducer', () => {

    test('Should return default state', () => {
        const newState = PostsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    test('Should return new state if receiving type', () => {
        const posts = [{Title: 'Test 1'}, {Title: 'Test 2'}, {Title: 'Test 3'}];
        const newState = PostsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })

})