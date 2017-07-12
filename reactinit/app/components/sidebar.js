import React from 'react'

import { Link } from 'react-router'
class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {     
        return (
            <div>我是侧边栏</div>
        )
    }

}
module.exports = Sidebar