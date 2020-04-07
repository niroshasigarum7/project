import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Counter from './Counter/Counter'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Counter />
        <Footer />
    </div>
)

export default App