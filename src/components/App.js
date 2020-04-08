import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Counter from './Counter/Counter'
import Notification from './Notifications/Notifications'
import UnitTesting from './UnitTesting/UnitTesting'

const App = () => (
    <div id="app">
        <AddTodo />
        <VisibleTodoList />
        <Counter />
        <Footer />
        {/* <Notification />
        {/* <UnitTesting /> */}
    </div>
)

export default App