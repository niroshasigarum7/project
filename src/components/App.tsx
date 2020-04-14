import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Counter from './Counter/Counter'
import Notification from './Notifications/Notifications'
import UnitTesting from './UnitTesting/UnitTesting'
import FramerAnimation from './FramerAnimation/FramerAnimation'
import SliderApp from './Slider/index'
import './App.css';

const App = () => (
    <div id="app">
        {/* <FramerAnimation /> */}
        <div className="header__title"><h3>Globetrotters</h3></div>
        <div id="add-todo">
            <AddTodo />
        </div>
        <div id="footer-todo">
            <Footer />
        </div>
        <div id="visible-todo">
            <h2>Testing keyframe animation</h2> 
            <VisibleTodoList />
        </div>
        <div id="counter-todo">
            <Counter />
        </div>
        {/* <Notification />
        {/* <UnitTesting /> */}
        <div className="slider-wrapper">
            <SliderApp />
        </div>
    </div>
)

export default App