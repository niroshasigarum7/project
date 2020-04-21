let nextTodoId = 0
export const todos = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})