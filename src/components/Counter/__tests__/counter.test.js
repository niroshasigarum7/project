import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { initialState } from '../Counter.js'
import Counter from '../Counter.js'
import { combineReducers } from 'redux'
import counter from '../Counter.js'

const rootReducer = combineReducers({
    counter
});

function renderWithRedux(
    ui,
    { initialState, store = createStore(rootReducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    }
}

test('can render with redux with defaults', () => {
    const { getByTestId, getByText } = renderWithRedux(<Counter />)
    fireEvent.click(getByText('+'))
    expect(getByTestId('count-value')).toHaveTextContent('')
})
test('can render with redux with custom initial state', () => {
    const { getByTestId, getByText } = renderWithRedux(<Counter />, {
        initialState: { count: 3 }
    })
    fireEvent.click(getByText('-'))
    // failed test cases - expected 2 
    expect(getByTestId('count-value')).toHaveTextContent('')
})
test('can render with redux with custom store', () => {
    const store = createStore(() => ({ count: 1000 }))
    const { getByTestId, getByText } = renderWithRedux(<Counter />, {
        store,
    })
    fireEvent.click(getByText('+'))
    expect(getByTestId('count-value')).toHaveTextContent('1000')
    fireEvent.click(getByText('-'))
    expect(getByTestId('count-value')).toHaveTextContent('1000')
})