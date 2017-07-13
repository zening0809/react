import React from 'react'

import { Link } from 'react-router'
// import Sidebar from '../../components/sidebar'
// import Header from '../../components/header'
import '../../static/css/home.css'

import { Layout, Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const { Header, Content, Footer, Sider } = Layout

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            caller: "上传成功数据",
            collapsed: false,
            title: '数据运营中心',
            projectCar: '汽车行业',
            callCar: '汽车行业',
            successCar: '汽车行业',
            dataCar: '汽车行业',
            seat: '坐席管理',
            base_data: '基础数据分析',
            cost: '成本核算'
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    <span>{this.state.title}</span>
                </Header>

                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['0']}
                            defaultOpenKeys={['sub0']}
                            inlineCollapsed={this.state.collapsed}
                        >
                            <SubMenu key="sub0" title="坐席">
                                <Menu.Item key="0"><Link style={{display:'block'}} to="/home/success">{this.state.caller}</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="subOperate" title="运营">
                                <SubMenu key="sub1" title="项目管理">
                                       <Menu.Item key="1"> <Link  to="/home/projectcar">{this.state.projectCar}</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title="外呼管理">

                                    <Menu.Item key="2">{this.state.seat}</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title="线索管理">
                                    <MenuItemGroup key="g1" title="成功线索">
                                        <Menu.Item key="3">{this.state.successCar}</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup key="g2" title="下发管理">
                                        <Menu.Item key="4">{this.state.callCar}</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key="sub4" title="数据管理">
                                    <Menu.Item key="5">{this.state.dataCar}</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub5" title="数据分析">
                                    <Menu.Item key="6">{this.state.base_data}</Menu.Item>
                                    <Menu.Item key="7">{this.state.cost}</Menu.Item>
                                </SubMenu>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            yunhe ©2016 Created
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
module.exports = Home  