import React from 'react'



class Free extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                我是自由查询
            </div>
        )
    }
  
}
module.exports = Free