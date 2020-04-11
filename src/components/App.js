import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Counter from './Counter/Counter'
import Notification from './Notifications/Notifications'
import UnitTesting from './UnitTesting/UnitTesting'
import FramerAnimation from './FramerAnimation/FramerAnimation'
import SliderApp from './Slider/index'

const App = () => (
    <div id="app">
        <FramerAnimation />
        <AddTodo />
        <VisibleTodoList />
        <Counter />
        <Footer />
        {/* <Notification />
        {/* <UnitTesting /> */}
        <SliderApp />
    </div>
)

export default App