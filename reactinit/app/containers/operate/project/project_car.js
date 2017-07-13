import React from 'react'
import { Table, Icon, Tabs, Button, Select, Row, Col } from 'antd';

// 引入选择组件
import SelectTag from '../../../components/select'
const TabPane = Tabs.TabPane;



class ProjectCar extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        {/*table的数据及方法*/ }
        const dataSource = [{
            key: '1',
            date: '2017-7-3',
            name: '胡彦斌',
            gender: '先生',
            phonenum: '1371****138',
            appraise: '那你很棒棒哦'
        }, {
            key: '2',
            date: '2017-7-3',
            name: '陈一发',
            gender: '女',
            phonenum: '1371****138',
            appraise: '那你很棒棒哦'
        }, {
            key: '3',
            date: '2017-7-3',
            name: '陈一发',
            gender: '女',
            phonenum: '1371****138',
            appraise: '那你很棒棒哦'
        }, {
            key: '4',
            date: '2017-7-3',
            name: '陈一发',
            gender: '女',
            phonenum: '1371****138',
            appraise: '那你很棒棒哦'
        }, {
            key: '5',
            date: '2017-7-3',
            name: '陈一发',
            gender: '女',
            phonenum: '1371****138',
            appraise: '那你很棒棒哦'
        }];

        const columns = [{
            title: '日期',
            dataIndex: 'date',
            key: 'date',
        }, {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
        }, {
            title: '原始号码',
            dataIndex: 'phonenum',
            key: 'phonenum',
        }, {
            title: '外呼评价',
            dataIndex: 'appraise',
            key: 'appraise',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="#">修改</a>
                    <span className="ant-divider" />
                    <a href="#">上传录音</a>
                    <span className="ant-divider" />
                    <a href="#" className="ant-dropdown-link">
                        查看详情
                    </a>
                </span>

            ),
        }];
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="apple" />联通</span>} key="1">
                    <SelectTag />
                    <Table dataSource={dataSource} columns={columns} />
                </TabPane>
                <TabPane tab={<span><Icon type="android" />电信</span>} key="2">
                    电信
                </TabPane>
            </Tabs>
        )
    }
}
module.exports = ProjectCar 