export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'


export const onIncrement = () => ({
    type: 'INCREMENT'
})
export const onDecrement = () => ({
    type: 'DECREMENT'
})
export const onIncrementAsync = () => ({
    type: 'INCREMENT_ASYNC'
})