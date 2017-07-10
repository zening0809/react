import React from 'react'



class Price extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                我是价格区间
            </div>
        )
    }
  
}
module.exports = Price