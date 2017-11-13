import React, { Component } from 'react';
import { Scroller, Touchable,Carousel  } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';



class HomePage extends Component {
    render() {
        return (
            <div className="yo-flex">
                <Header title="首页" left={false}/>
                <Scroller extraClass="flex">
                    
                    <div className="m-content">
                        <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/list');
                        }}>
                            <div>
                                <p className="title">自我介绍</p>
                                <p className="notice">点我查看更多...</p>
                            </div>
                            
                        </Touchable>
                        <Carousel>
                            <li className="item"><img className="img" src="//img.alicdn.com/tps/TB13Ha_NXXXXXbCXVXXXXXXXXXX-1125-352.jpg_q50.jpg" /></li>  
                            <li className="item"><img className="img" src="//aecpm.alicdn.com/simba/img/TB10CLcNXXXXXXVXXXXSutbFXXX.jpg_q50.jpg" /></li>  
                            <li className="item"><img className="img" src="//gw.alicdn.com/imgextra/i2/5/TB2xuHoaX55V1Bjy0FnXXc5XFXa_!!5-0-yamato.jpg_q50.jpg" /></li>  
                        </Carousel>
                    </div>
                </Scroller>
                    
                
                <Footer/>
                
            </div>
        )
    }
}

export default HomePage;
