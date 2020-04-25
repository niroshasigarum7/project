import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from './AddTodo/AddTodo'
import VisibleTodoList from './VisibleTodoList/VisibleTodoList'
import Counter from './Counter/Counter'
import Notification from './Notifications/Notifications'
import UnitTesting from './UnitTesting/UnitTesting'
import FramerAnimation from './FramerAnimation/FramerAnimation'
import SliderApp from './Slider/index'
import Paint from './Paint/Paint'
import './App.css';

import { connect } from 'react-redux'
import Button from './Button/Button'
import NewsItem from './NewsItem/NewsItem'
import Loading from './Loading/Loading'


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
        {/* <Notification />
        {/* <UnitTesting /> */}
        {/* <div className="slider-wrapper">
            <SliderApp />
        </div> */}
    </div>
)


export default connect((state) => {
    return state
})(App)