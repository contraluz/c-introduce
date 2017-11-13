import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';

class My extends Component {
    render() {
        var myArr=[
            "../img/vue.jpg",
            "../img/c.jpg",
            "../img/h.jpg",
            "../img/nodejs.jpg"
        ]
        return (
            <div className="yo-flex">
                <Header title="我的"/>
                <Scroller extraClass="flex" onScroll={() => {
                }}>
                    
                    
                     <div className="yo-list yo-list-group">                                                
                        <div className="item" >
                            
                            <div className="flex">
                                <Scroller.LazyImage height="100" src={`../img/k.jpg`}/>
                                <span className='my_name'>张培峰</span> 
                            </div>
                            <div className="mark" >
                                <Scroller.LazyImage height="80" src={`../img/weixin.png`}/>
                             </div>
                        </div> 
                        <h2 className="my_title">联系方式：</h2>
                        <div className="item" >
                            <div className="mark">
                                <div className="detail">手机号码：15957317054</div>
                                <div className="detail">QQ：942146014</div>
                                <div className="detail">E-mail：zhang_len@foxmail.com</div>
                                
                             </div> 
                        </div>
                        <h2 className="my_title">地址：</h2>                        
                        <div className="item" >
                            <div className="mark">
                                <div className="title">户籍：浙江温州</div>
                             </div> 
                        </div> 
                        <h2 className="my_title">学历：</h2>                        
                        <div className="item" >
                            <div className="mark">
                                <div className="title">毕业院校：嘉兴学院</div>
                                <div className="detail">专业：工程管理</div>
                                <div className="detail">毕业时间：2016.6</div>
                             </div> 
                        </div> 
                    </div>
                    
                </Scroller>
                {/* <Footer/> */}
                <ul className="yo-tab">
                <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/');
                        }}>
                          <li className="item">首页</li>
                            
                    </Touchable>
                    
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/');
                        }}>
                           <li className="item">经历</li>
                            
                    </Touchable>
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/list');
                        }}>
                            <li className="item">项目</li>
                            
                    </Touchable>
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/detail');
                        }}>
                             <li className="item">技能</li>
                            
                    </Touchable>
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/my');
                        }}>
                          <li className="item item-on">我的</li>
                            
                    </Touchable>
                    
                </ul>
            </div>
        )
    }
}

export default My;




    
        
    