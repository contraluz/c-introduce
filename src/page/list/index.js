import React, { Component } from 'react';
import { List ,Touchable,Scroller } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';
 
class Detail extends Component {
    

    render() {
        return (
            <div className="yo-flex">
            <Header title="项目"/>
            <Scroller extraClass="flex" onScroll={() => {
            }}>
                
                <div className="yo-card">
                    <h3 className="hd">项目1：sasa官网（香港）</h3>
                    <div className="bd cols">
                        <img className="img-cover" width='370' height='230' src="../img/reg.jpg" alt="sasa"/>
                        <div className="flex">
                        <a href='http://www.sasa.com/' className="title">进入sasa官网</a>
                            <p className="desc">
                                主要经营全球畅销奢品美妆产品，护肤品、香水、化妆品、头发护理用品、以至专有及独家代理的国际品牌产品的B2C的电商网站。
                                并且由香港保税仓直发，为顾客节省了不少。这个项目使用的技术栈只要有（Vue、Axios、Vuex、Git、Webpack、Sass、Nodejs、Mongodb、VsCode、iview、IconFont等）。
                                另外主要的模块划分是（用户、分类模块、首页模块、资讯、上传、评论.....产品、订单等） 。项目共计耗时6个半月，参与人员主要有（业务、产品经理、项目经理、设计、前端、开发、测试、运维、客服）。而我负责的模块是产品、订单、用户模块，这部分主要的难点是用户信息以及订单的获取和上传。
                                根据每个客户不同的客户会员等级，需要显示不同的会员界面以及特权商品等等。经过研究后我决定采用axios技术解决用户http请求，利用它自动转换 JSON 数据的功能将用户以及订单信息展示出来，区分出不同客户的具体会员等级改变主要界面。
                                在项目中遇到了多次要与后台沟通的数据问题，在与后台开发人员的积极沟通合作下，项目有条不紊地进行着，最终完美达成任务还提前了几周的时间。
                            </p>
                        </div>
                    </div>
                    <div className="ft">
                        <span>2016.8.18</span>
                       
                    </div>
                </div>
                <div className="yo-card">
                    <h3 className="hd">项目2：麦芽网</h3>
                    <div className="bd cols">
                        <img className="img-cover" width='300' height='290' src="../img/maiya.jpg" alt="maiya"/>
                        <div className="flex">
                            <a href='http://www.maiya.com/' className="title">进入麦芽网</a>
                            <p className="desc">
                            麦芽网目前已拥有八大系列超过2000个原创学习课程和有声故事。
                            涵盖了0-6岁儿童教育成长所需的基本内容。
                            所展现的资源采用文字、图片、动画、视频和声音等生动有趣的多媒体形式，通过多平台的个人终端为家长及孩子提供方便快捷的获取和学习途径。
                            同时，麦芽网充分考虑到现代家庭的生活规律和生活习惯，重视零碎时间对孩子培育的重要性和可行性，真正做到“随时随地”满足家长和孩子的需要。
                            </p>
                        </div>
                    </div>
                    <div className="ft">
                        <span>2017.5.22</span>
                      
                    </div>
                </div>
              
            </Scroller>
            
            <ul className="yo-tab">
            <Touchable touchClass="m-content-active" onTap={() => {
                        yoHistory.push('/');
                    }}>
                      <li className="item">首页</li>
                        
                </Touchable>
                
                <Touchable touchClass="m-content-active" onTap={() => {
                        yoHistory.push('/pro');
                    }}>
                       <li className="item">经历</li>
                        
                </Touchable>
                <Touchable touchClass="m-content-active" onTap={() => {
                        yoHistory.push('/list');
                    }}>
                        <li className="item item-on">项目</li>
                        
                </Touchable>
                <Touchable touchClass="m-content-active" onTap={() => {
                        yoHistory.push('/detail');
                    }}>
                         <li className="item">技能</li>
                        
                </Touchable>
                <Touchable touchClass="m-content-active" onTap={() => {
                        yoHistory.push('/my');
                    }}>
                      <li className="item">我的</li>
                        
                </Touchable>
                
            </ul>
        </div>
        )
    }
}




export default Detail;
