import React, { Component } from 'react';
import "./home.scss";
import Swiper from "@/components/swiper";
class Home extends Component {

  render() {
    return (
     
            <div className="box">
                 <div className="header">
       
                   <img src="//img.villaday.com/images/activity/demand/logo.png" alt="维拉度假"/>
                    <input type="search" results="s" placeholder="搜索关键字/城市/别墅名"/> 
                    <span>丨</span>
                    <p>深圳</p>
                 </div>
                 <div className="content">
                       首页中间
                 </div>
            </div>
          
    );
  }
}

export default Home;