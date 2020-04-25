import React from 'react'
import { connect } from 'react-redux'
import { onIncrementAsync } from '../../actions'
import { incrementAsync } from '../../sagas/Counter/couter-saga'
class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }
    onIncrementAsync = () => {
        console.log('yes, its called')
        this.props.dispatch({type: 'INCREMENT_ASYNC'})
    }
    render() {
        return (
            <div>
                <h2> Counter </h2>
                <div>
                    <button
                        onClick={this.onIncrementAsync}
                    >increment after 1 seconds</button>
                    <button onClick={this.decrement}> - </button>
                    <span data-testid="count-value">{this.props.count}</span>
                    <button onClick={this.increment}> + </button>
                </div>
            </div>
        )
    }
}

export default connect(state => ({ count: state.count }))(Counter)

// const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => {
//     return (<div>
//         <button
//             onClick={onIncrementAsync}>
//             increment after 1 seconds
//         </button>
//         {' '}
//         <button
//             onClick={onIncrement}
//         >
//             increment
//         </button>
//         {' '}
//         <button
//             onClick={onDecrement}
//         >DECREMENT</button>
//         <hr />
//         <div>
//             CLicked: {value} times
//         </div>
//     </div>)
// }

// export default Counter