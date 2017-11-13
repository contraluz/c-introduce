import React, { Component } from 'react';
import { EnvView } from '$router';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Footer extends Component {
    
    render() {
        return (
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
        )
    }
}



export default Footer;
