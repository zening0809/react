import React from 'react'

import {Link} from 'react-router'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="loginContainer -align-center">
                <div className="loginContent">
                    <div className="loginTitle">潜客关注动态展示系统</div>
                    <div className="loginText">登&nbsp;录</div>
                    <input name='phoneNum' name="phonenum" className="loginaccount" type="text"></input>
                    <input name="verifycode" className="loginPassword" type="text"></input>
                    <div className="getCovert">获取验证码</div>
                    <Link className="loginBtn" to='/home/index'>联系我们</Link>
                    <div className="testHint"></div>
                </div>
            </div>
        )
    }
    lsSubmit() {
           console.log(11111111);
    }
}
module.exports = Login  