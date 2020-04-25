import reducer from '../AddTodo';
import * as types from '../../../actions/AddTodo/AddTodo';
import expect from 'expect';
/*
https://redux.js.org/recipes/writing-tests
https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1
*/
const action = {
        type: types.ADD_TODO,
        text: 'Run the tests'
};
const initialState = [{
        text: 'Use Redux',
        completed: false,
        id: 0
}];
const expectedState = [
        {
                text: 'Run the tests',
                completed: false,
                id: 1
        },
        {
                text: 'Use Redux',
                completed: false,
                id: 0
        }
];
describe('AddTodo', () => {
        it('should test the initial state', () => {
                expect(reducer(undefined, action)).toEqual(initialState);
                expect(reducer(undefined, action)).toMatchSnapshot();
        });
        it('returns the expected or correct state', () => {
                expect(reducer(initialState, action)).toEqual(expectedState);
                expect(reducer(initialState, action)).toMatchSnapshot();
        });
        // it('should handle ADD_TODO', () => {
        //         const actionType = 'ADD_TODO';
        //         expect(reducer(initialState, actionType)).toEqual(expectedState);
        // });
});
        