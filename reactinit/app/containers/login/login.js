import React from 'react'

import {Link} from 'react-router'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
             <Link to="/home/success">我是登录页</Link>
        )
    }
    lsSubmit() {
           console.log(11111111);
    }
}
module.exports = Login  