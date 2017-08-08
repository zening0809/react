import React, { Component } from 'react'
import { Router, Route, Link, Redirect, hashHistory, browserHistory, IndexRoute } from 'react-router'

import Login from '../containers/login/login'
import Home from '../containers/home/home'
import SuccessData from '../containers/data_manage/success_data'
import ProjectCar from '../containers/operate/project/project_car'

import SeatMange from '../containers/caller_manage/seat_mange'

import SlotCar from '../containers/line_mange/slot_mange/car_industry'
import SuccessCar from '../containers/line_mange/success_mange/car_industry'


export default class Routers extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}
                    onLeave={({ params }) => {
                        console.log('离开了登录页 我们去首页');
                    }}
                >

                </Route>
                <Route path='/home' component={Home}>
                    <Route path = 'success' component = {SuccessData}/>
                    <Route path = 'projectcar' component = {ProjectCar}/>
                    <Route path = 'seatmange' component = {SeatMange}/>
                    <Route path = 'successcar' component = {SuccessCar}/>
                    <Route path = 'slotcar' component = {SlotCar}/>
                </Route>
            </Router>
        )
    }
}