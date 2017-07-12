import React from 'react'

import {Link} from 'react-router'
// import Sidebar from '../../components/sidebar'
// import Header from '../../components/header'
import '../../static/css/home.css'

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
	constructor(props, context) {
		super(props, context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return (
			<Layout>
			<Header className="header" style={{ background: 'pink' }} />
			<Layout>
			  <Sider
			    breakpoint="lg"
			    collapsedWidth="0"
			    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
			  >
			    <Link to="/" className="logo">我是首页</Link>
			    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
			      <Menu.Item key="1">
			        <Icon type="user" />
			        <span className="nav-text">nav 1</span>
			      </Menu.Item>
			      <Menu.Item key="2">
			        <Icon type="video-camera" />
			        <span className="nav-text">nav 2</span>
			      </Menu.Item>
			      <Menu.Item key="3">
			        <Icon type="upload" />
			        <span className="nav-text">nav 3</span>
			      </Menu.Item>
			      <Menu.Item key="4">
			        <Icon type="user" />
			        <span className="nav-text">nav 4</span>
			      </Menu.Item>
			    </Menu>
			  </Sider>
			  <Layout>
			    <Content style={{ margin: '24px 16px 0' }}>
			      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
			        {this.props.children}
			      </div>
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			      Ant Design ©2016 Created by Ant UED
			    </Footer>
			  </Layout>
			  </Layout>
			</Layout>				 
		)
	}
	lsSubmit() {
		console.log(11111111);
	}
}
module.exports =  Home  