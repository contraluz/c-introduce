import React, { Component } from 'react';
import { List ,Touchable,Scroller } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';
 
class Pro extends Component {
    

    render() {
        return (
            <div className="yo-flex">
            <Header title="经历"/>
            <Scroller extraClass="flex" onScroll={() => {
            }}>
                
                <div className="yo-card">
                    <div className="extra">
                         <img className="img-cover" width='375' src="../img/lan.jpg" alt="易网"/> 
                    </div>
                    <div className="bd">
                        <h3><a href="http://www.eoner.com/" className="title">杭州易网灵杰科技有限公司</a></h3>
                        <p className="desc">sasa 官网、www.sasa.com、sasa体验App</p>
                        <p className="desc">公司员工：30</p>
                        
                    </div>
                </div>
                <div className="yo-card">
                    <div className="extra">
                        <img className="img-cover" width='375' src="../img/siwei.jpg" alt="四维空间"/>
                    </div>
                    <div className="bd">
                        <h3><a href="http://www.vpans.com/" className="title">四维空间信息科技有限公司</a></h3>
                        <p className="desc">ruiyantong.com、zhengjiaotong.com、政教通App等</p>
                        <p className="desc">公司员工：126</p>
                       
                    </div>
                </div>
                <div className="yo-card">
                    <div className="extra">
                        <img className="img-cover" width='375' src="../img/swei.jpg" alt="四维空间"/>
                    </div>
                    <div className="bd">
                        <h3><a href="http://www.vpans.com/" className="title">四维空间信息科技有限公司</a></h3>
                        <p className="desc">ruiyantong.com、zhengjiaotong.com等</p>
                        <p className="desc">公司员工：126</p>
                       
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
                       <li className="item item-on">经历</li>
                        
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
                      <li className="item">我的</li>
                        
                </Touchable>
                
            </ul>
        </div>
        )
    }
}




export default Pro;
