import React from 'react'
import { Table, Icon, Tabs, Button, Select } from 'antd';
import WrappedRegistrationForm from '../../components/form/create_form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
const TabPane = Tabs.TabPane;
const Option = Select.Option;


import '../../static/css/form-animate.css'

class Success extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            createForm: false
        }
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    showForm() {
        this.setState({ createForm: true })
        console.log(this.setState);
    }
    render() {
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="#">Action 一 {record.name}</a>
                    <span className="ant-divider" />
                    <a href="#">Delete</a>
                    <span className="ant-divider" />
                    <a href="#" className="ant-dropdown-link">
                        More actions <Icon type="down" />
                    </a>
                </span>

            ),
        }];

        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="apple" />联通</span>} key="1">
                    <div style={{ height: "36px", marginBottom: '20px' ,marginTop: '15px' }}>
                        <span style={{color:"#0094ff"}}>当前项目: &nbsp;&nbsp;</span>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.handleChange.bind(this)}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                            <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                            <Option value="长安奔奔项目">长安奔奔项目</Option>
                        </Select>
                        <Button style={{ float: 'right' }} onClick={this.showForm.bind(this)} type="primary">新建表单</Button>
                    </div>

                    <Table dataSource={dataSource} columns={columns} />
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        {this.state.createForm ? <WrappedRegistrationForm></WrappedRegistrationForm> : ''}
                    </ReactCSSTransitionGroup>
                </TabPane>
                <TabPane tab={<span><Icon type="android" />电信</span>} key="2">
                    电信
                </TabPane>
            </Tabs>
        )
    }

}
module.exports = Success