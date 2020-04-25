// Action types - in types folder (exporting this very important)
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


// action creators
let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}