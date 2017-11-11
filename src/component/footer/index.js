import React, { Component } from 'react';
import { EnvView } from '$router';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Footer extends Component {
    render() {
        return (
            <header className="yo-footer">
                <ul className="yo-tab">
                    <li className="item item-on">首页</li>
                    <li className="item">技能</li>
                    <li className="item">项目</li>
                    <li className="item">经历</li>
                    <li className="item">我的</li>
                </ul>
            </header>
        )
    }
}



export default Footer;
