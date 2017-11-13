import React, { Component } from 'react';
import { List ,Touchable,Dialog } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';
 
class Detail extends Component {
    

    render() {
        return (
            <div className="yo-flex">
                <Header title="项目" right={{ title: 'hello', onTap: () => alert('hey Jude') }}/>
                    
                

                





                <ul className="yo-tab">
                <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/');
                        }}>
                          <li className="item item-on">首页</li>
                            
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
                          <li className="item">我的</li>
                            
                    </Touchable>
                    
                </ul>
            </div>
        )
    }
}




export default Detail;
