import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";
import RouterCom from './router/index.js';
import * as serviceWorker from './serviceWorker';
import  Axios from "@/api/axios";
Component.prototype.$axios=Axios;
ReactDOM.render(<RouterCom />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
