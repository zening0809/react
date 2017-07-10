import React from 'react'



class Brand extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                我是品牌车型
            </div>
        )
    }
  
}
module.exports = Brand