import React from 'react'

import {Link} from 'react-router'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
               <Header></Header>
               <Sidebar></Sidebar>
               <Link to="/">我是首页</Link>
               <div>{this.props.children}</div>
            </div>
             
        )
    }
    lsSubmit() {
           console.log(11111111);
    }
}
module.exports =  Home  