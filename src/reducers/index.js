import { combineReducers } from 'redux'
import todos from './AddTodo/AddTodo'
import visibilityFilter from './visibilityFilter'
import counter from './counter'
import paint from './Paint/Paint'
import news from './News/News'

export default combineReducers({
    todos,
    visibilityFilter,
    counter,
    paint,
    news,
})