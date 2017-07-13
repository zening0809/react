import React from 'react'

import {Link} from 'react-router'

class ProjectCar extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
             <Link to="/home/success">我是项目管理汽车行业</Link>
        )
    }
}
module.exports = ProjectCar 