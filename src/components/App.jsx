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

import { Route, Switch } from 'react-router-dom'
const App = () => (
    <Switch>
        <div id="app">
            <div className="header__title"><h3>Globetrotters</h3></div>
            <div className="tabs-container">
                <a href="/addtodo">Add todo</a>
                <a href="/slider">Slider App</a>
                <a href="/notification">Notification</a>
                <a href="/loading">loading</a>
                <a href="/news-item">news-item</a>
                <a href="/paint">paint</a>
                <a href="/framer-animation">framer-animation</a>
                <a href="/unit-testing">unit-testing</a>
                <a href="/counter">counter</a>
            </div>
            <Route path='/addtodo' component={AddTodo} />
            <Route path='/addtodo' component={Footer} />
            <Route path='/addtodo' component={VisibleTodoList} />
            <Route path='/slider' component={SliderApp} />
            <Route path='/notification' component={Notification} />
            <Route path='/loading' component={Loading} />
            <Route path='/button' component={Button} />
            <Route path='/news-item' component={NewsItem} />
            <Route path='/paint' component={Paint} />
            <Route path='/framer-animation' component={FramerAnimation} />
            <Route path='/unit-testing' component={UnitTesting} />
            <Route path='/counter' component={Counter} />
        </div>
    </Switch> 
)


export default connect((state) => {
    return state
})(App)