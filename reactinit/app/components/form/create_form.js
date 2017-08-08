import React from 'react'
import { Form, DatePicker, TimePicker, Tag, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Switch } from 'antd';


import HotTags from './hot_tag.js'
import SexRadio from './radio_sex.js'

// 定义文本域
const { TextArea } = Input;
const MonthPicker = DatePicker.MonthPicker;
const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;



const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

const carBrand = [{
    value: '大众',
    label: '大众',
    children: [{
        value: '甲壳虫',
        label: '甲壳虫'
    }]
}];
class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    intentionSelect = (value) => {
        console.log(`selected ${value}`);
    }
    onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    close = (e) => {
        console.log(e);
    }
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 60 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
            );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="用户姓名"
                    hasFeedback
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Please input your name!',
                        }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                    hasFeedback
                >
                    {getFieldDecorator('name', {})(
                        <SexRadio />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="原始号码"
                    hasFeedback
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="完整号码"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input  phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="购车地点"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                    })(
                        <Cascader showSearch={true} options={residences} />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="地址"
                    hasFeedback
                >
                    {getFieldDecorator('address', {
                        rules: [{
                            required: true, message: 'Please input your address',
                        }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <div>
                            <Switch defaultChecked={false} onChange={this.onChange} />
                            <span>是否考虑本品牌或本车型</span>
                        </div>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="意向品牌车型"
                >
                    {getFieldDecorator('intentinBrand', {
                        initialValue: ['大众'],
                        rules: [{ type: 'array', required: true, message: 'Please select your carBrand!' }],
                    })(
                        <div>
                            <Cascader showSearch={true} options={carBrand} />
                            <Tag closable onClose={this.close} color="pink">大众</Tag>
                            <Tag closable onClose={this.close} color="red">甲壳虫</Tag>
                        </div>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="车型级别"
                    hasFeedback
                >
                    {getFieldDecorator('carTime', {})(
                        <HotTags />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="预计购车时间"
                >
                    {getFieldDecorator('month-picker', config)(
                        <MonthPicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="购车预算"
                    hasFeedback
                >
                    {getFieldDecorator('carCost', {})(
                        <HotTags />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="联系时间"
                    hasFeedback
                >
                    {getFieldDecorator('timeContact', {})(
                        <HotTags />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="标签一"
                    hasFeedback
                >
                    {getFieldDecorator('tag1', {
                        rules: [{
                            required: true, message: 'Please input!',
                        }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="标签二"
                    hasFeedback
                >
                    {getFieldDecorator('tag2', {
                        rules: [{
                            required: true, message: 'Please input !',
                        }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="标签三"
                    hasFeedback
                >
                    {getFieldDecorator('tag3', {
                        rules: [{
                            required: true, message: 'Please input!',
                        }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="标签四"
                    hasFeedback
                >
                    {getFieldDecorator('tag4', {
                        rules: [{
                            required: true, message: 'Please input !',
                        }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="备注"
                    hasFeedback
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Please input !',
                        }],
                    })(
                        <TextArea rows={4} />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="意向程度"
                    hasFeedback
                >
                    {getFieldDecorator('intentionSelect', {
                        rules: [{
                            required: true, message: 'Please input !',
                        }],
                    })(
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.intentionSelect}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="high">高</Option>
                            <Option value="normal">中</Option>
                            <Option value="low">低</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">确定</Button>
                </FormItem>
            </Form>

        );
    }
}

export default Form.create()(RegistrationForm);
/*const FormAll = () => (
    <div>
        <WrappedRegistrationForm />
    </div>
)
export default FormAll*/