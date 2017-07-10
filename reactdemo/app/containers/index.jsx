import React from 'react'
import Sidebar from '../components/sidebar.jsx'



class Main extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const homePage = {
            height: '100%',
            overflow:'hidden'
        }
        const dataContainer = {
             marginLeft: '236px',
             height: '100%'
            //  background: 'orange'
        }
        return (
            <div style = {homePage}>
             {/*侧边栏*/}
               <Sidebar/>
               <div style = {dataContainer}>
                   {this.props.children}
               </div>
            </div>
        )
    }
  
}
module.exports = Main