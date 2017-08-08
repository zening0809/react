import React from 'react'
import { Table, Icon, Button, Select, Row, Col } from 'antd';

const Option = Select.Option;
const ButtonGroup = Button.Group;
class SelectTag extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
        
                <div className="gutter-example">
                        <Row style={{ marginBottom: "15px" }} gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <span style={{ color: "#0094ff",display:' inline-block',width:'20%' }}>日期: &nbsp;&nbsp;</span>
                                    <Select
                                        kry="date"
                                        showSearch
                                        style={{ width: '60%' }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange.bind(this)}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                                        <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                                        <Option value="长安奔奔项目">长安奔奔项目</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <span style={{ color: "#0094ff",display:' inline-block',width:'20%' }}>项目: &nbsp;&nbsp;</span>
                                    <Select
                                        kry="project"
                                        showSearch
                                        style={{ width: '60%' }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange.bind(this)}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                                        <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                                        <Option value="长安奔奔项目">长安奔奔项目</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <span style={{ color: "#0094ff",display:' inline-block',width:'20%' }}>客户: &nbsp;&nbsp;</span>
                                    <Select
                                        kry="custom"
                                        showSearch
                                        style={{ width: '60%' }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange.bind(this)}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                                        <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                                        <Option value="长安奔奔项目">长安奔奔项目</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <span style={{ color: "#0094ff",display:' inline-block',width:'20%' }}>省&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;</span>
                                    <Select
                                        kry="province"
                                        showSearch
                                        style={{ width: '60%' }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange.bind(this)}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                                        <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                                        <Option value="长安奔奔项目">长安奔奔项目</Option>
                                    </Select>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: "20px" }}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <span style={{ color: "#0094ff",display:' inline-block',width:'20%' }}>市&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;</span>
                                    <Select
                                        kry="city"
                                        showSearch
                                        style={{ width: '60%' }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange.bind(this)}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                                        <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                                        <Option value="长安奔奔项目">长安奔奔项目</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <span style={{ color: "#0094ff",display:' inline-block',width:'20%' }}>品牌: &nbsp;&nbsp;</span>
                                    <Select
                                        kry="brand"
                                        showSearch
                                        style={{ width: '60%' }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange.bind(this)}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                                        <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                                        <Option value="长安奔奔项目">长安奔奔项目</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <span style={{ color: "#0094ff",display:' inline-block',width:'20%' }}>车型: &nbsp;&nbsp;</span>
                                    <Select
                                        kry="type"
                                        showSearch
                                        style={{ width: '60%' }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange.bind(this)}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="东风雪铁龙项目">东风雪铁龙项目</Option>
                                        <Option value="大众甲壳虫项目">大众甲壳虫项目</Option>
                                        <Option value="长安奔奔项目">长安奔奔项目</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box" >
                                    <ButtonGroup style={{ width:"80%"}}>
                                        <Button style={{ width:"50%"}} icon="search"  type="primary">搜索</Button>
                                       <Button  style={{ width:"50%"}} icon="poweroff" type="primary">新建</Button>
                                    </ButtonGroup>
                                    
                                </div>
                            </Col>
                        </Row>
                </div>
            
        )
    }
}
module.exports = SelectTag