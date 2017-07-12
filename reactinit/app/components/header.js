import React from 'react'

import { Link } from 'react-router'
class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {     
        return (
            <div>我是顶部</div>
        )
    }

}
module.exports = Header