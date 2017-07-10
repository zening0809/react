// 项目入口文件
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Routers from './router/router.jsx'

import './static/css/base.css'
import './static/css/login.css'
// import './static/css/sidebar.scss'
import './static/css/font_icon/iconfont.css'

// 组件渲染到真实dom节点
ReactDOM.render(
	<Routers/>,
	document.getElementById('app')
)