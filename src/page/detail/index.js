import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';

class DetailPage extends Component {
    render() {
        return (
            <div className="yo-flex">
                <Header title="技能"/>
                <Scroller extraClass="flex" onScroll={() => {
                }}>
                    <Touchable onTap={() => {
                        yoHistory.goto('/')
                    }}>
                        <div className="yo-btn yo-btn-m yo-btn-light">回到首页</div>
                    </Touchable>
                    <div className="yo-list yo-list-group">  
                    <div className="item" >
                        <p>我掌握的主要技能 </p>
                    </div>                                              
                    <div className="item" > 
                        <div className="flex">
                            <Scroller.LazyImage height="100" width="100" src={`../img/ang.jpg`}/>
                        </div>
                        <div className="mark" >
                            <span className='my_name'>Angular</span> 
                            
                         </div>
                    </div> 
                    <div className="item" > 
                        <div className="flex">
                            <Scroller.LazyImage height="100" width="100" src={`../img/r.jpg`}/>
                        </div>
                        <div className="mark" >
                            <span className='my_name'>React</span> 
                         </div>
                    </div>
                    <div className="item" > 
                        <div className="flex">
                            <Scroller.LazyImage height="100" width="100" src={`../img/nodejs.jpg`}/>
                        </div>
                        <div className="mark" >
                            <span className='my_name'>Node.js</span> 
                         </div>
                    </div>
                    <div className="item" > 
                        <div className="flex">
                            <Scroller.LazyImage height="100" width="100" src={`../img/h.jpg`}/>
                        </div>
                        <div className="mark" >
                            <span className='my_name'>HTML</span> 
                         </div>
                    </div>
                    <div className="item" > 
                        <div className="flex">
                            <Scroller.LazyImage height="100" width="100" src={`../img/c.jpg`}/>
                        </div>
                        <div className="mark" >
                            <span className='my_name'>CSS</span> 
                         </div>
                    </div>
                    <div className="item" > 
                        <div className="flex">
                            <Scroller.LazyImage height="100" width="100" src={`../img/vue.jpg`}/>
                        </div>
                        <div className="mark" >
                            <span className='my_name'>Vue</span> 
                         </div>
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
                            <li className="item">项目</li>
                            
                    </Touchable>
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/detail');
                        }}>
                             <li className="item item-on">技能</li>
                            
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

export default DetailPage;




    
        
    