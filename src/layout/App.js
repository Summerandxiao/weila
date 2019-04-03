import React, { Component } from 'react';
import "@/main.scss";
import {NavLink,Switch,Route,Redirect} from "react-router-dom";
import Home from "@/pages/home";
import Des from "@/pages/des";
import Need from "@/pages/need";
import Find from "@/pages/find";
import My from "@/pages/my";
import "../iconfont/iconfont.css";

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="box">
                 <Switch>
                   <Route path="/home" component={Home}></Route>
                   <Route path="/des" component={Des}></Route>
                   <Route path="/need" component={Need}></Route>
                   <Route path="/find" component={Find}></Route>
                   <Route path="/my" component={My}></Route>
                   <Redirect to={{pathname:"/home"}}/>
                  
                 </Switch>
            </div>
            <div className="footer">
               <ul>
                  <NavLink to="/home" >
                  <p className="iconfont icon-home" ></p>
                  首页
                  </NavLink>
                  <NavLink to="/des" >
                  <p className="iconfont icon-mudedi" ></p>
                  目的地
                  </NavLink>
                  <NavLink to="/need" >
                  <p className="iconfont icon-jiahao" ></p>
                  提交需求
                  </NavLink>
                  <NavLink to="/find" >
                  <p className="iconfont icon-faxian"></p>
                  发现
                  </NavLink>
                  <NavLink to="/my" >
                  <p className="iconfont icon-icon-test"></p>
                  我的
                  </NavLink>
               </ul>
            </div>
      </div>
    );
  }
}

export default App;
