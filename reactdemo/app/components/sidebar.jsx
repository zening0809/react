import React from 'react'

import { Link } from 'react-router'
import '../static/css/sidebar.scss'
class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        
            const iconStyle = { position: 'absolute', right: '3%'}
            
        return (
            <div className="exhibitList clearfix" >
                <div className="exhibitListTitle">
                    潜客关注动态展示系统
                </div>
                <div className="exhibitNavbar">
                    <div className="exhibitNavbarTitle">地区关注度</div>
                    <ul className="exhibitNavContent">
                        <li><Link className="currentSelect" to="/home/"><i className="iconfont icon-wujiaoxingshixin"></i>&nbsp;&nbsp;车型级别<i style={iconStyle} className="iconfont icon-jiantou"></i></Link></li>
                        <li><Link to="/home/price"><i className="iconfont icon-price"></i>&nbsp;&nbsp;价格区间<i style={iconStyle} className="iconfont icon-jiantou"></i></Link></li>
                        <li><Link to="/home/brand"><i className="iconfont icon-pinpai"></i>&nbsp;&nbsp;品牌车型<i style={iconStyle} className="iconfont icon-jiantou"></i></Link></li>
                    </ul>
                    <div className="exhibitNavbarTitle">品牌关注度</div>
                    <ul className="exhibitNavContent">
                        <li><Link to="/home/type"><i className="iconfont icon-chexing1"></i>&nbsp;&nbsp;车型<i style={iconStyle} className="iconfont icon-jiantou"></i></Link></li>
                        <li><Link to="/home/location"><i className="iconfont icon-diqu"></i>&nbsp;&nbsp;地区<i style={iconStyle} className="iconfont icon-jiantou"></i></Link></li>
                        <li><Link to="/home/intention"><i className="iconfont icon-yixiangjibie2"></i>&nbsp;&nbsp;意向程度<i style={iconStyle} className="iconfont icon-jiantou"></i></Link></li>
                    </ul>
                    <Link to="/home/free" className="freeSearch">自由查询</Link>
                </div>
            </div>
        )
    }

}
module.exports = Sidebar