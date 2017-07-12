import React, { Component } from 'react'
import { Router, Route, Link, Redirect, hashHistory, browserHistory, IndexRoute } from 'react-router'

import Login from '../containers/login/login'
import Home from '../containers/home/home'
import SuccessData from '../containers/data_manage/success_data'


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
            <Router history={browserHistory}>
                <Route path='/' component={Login}
                    onLeave={({ params }) => {
                        console.log('离开了登录页 我们去首页');
                    }}
                >

                </Route>
                <Route path='/home' component={Home}>
                    <Route path = 'success' component = {SuccessData}/>
                </Route>
            </Router>
        )
    }
}