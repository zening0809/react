import React from 'react'
import { Table, Icon } from 'antd';
import WrappedRegistrationForm from '../../components/form/create_form'

import { Link } from 'react-router'
class Success extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            createForm : false
        }
    }

       showForm(){
          this.setState({createForm : true})
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
            <div>
                 <button onClick = {this.showForm.bind(this)}>新建表单</button>
                 <Table dataSource={dataSource} columns={columns} />
                     if(this.state.createForm){
                       <WrappedRegistrationForm></WrappedRegistrationForm>
                     }
            </div>
        )
    }

}
module.exports = Success