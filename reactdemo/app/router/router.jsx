import React, { Component } from 'react'
import { Router, Route, Link, Redirect, hashHistory, browserHistory, IndexRoute } from 'react-router'

import Login from '../containers/login/login.jsx'
import HomeIndex from '../containers/home/home.jsx'
import Price from '../containers/price/price.jsx'
import Brand from '../containers/brand/brand.jsx'
import Location from '../containers/location/location.jsx'
import Type from '../containers/type/type.jsx'
import Free from '../containers/freedom/freedom.jsx'
import Intention from '../containers/intention/intention.jsx'
import Main from '../containers/index.jsx'


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
                        // const _this = this
                        // if(true){
                        //      _this.context.route.push(`/home`)  
                        // }
                        console.log('离开了登录页 我们去首页');
                    }}
                >

                </Route>
                <Route path='/home' component={Main}>
                      <Route path = 'index' component = {HomeIndex}/>
                      <Route path = 'price' component = {Price}/>
                      <Route path = 'brand' component = {Brand}/>
                      <Route path = 'type' component = {Type}/>
                      <Route path = 'location' component = {Location}/>
                      <Route path = 'intention' component = {Intention}/>
                      <Route path = 'free' component = {Free}/>
                </Route>
            </Router>
        )
    }
}