import React from "react";
import {HashRouter as Router , Switch,Route } from "react-router-dom";
import App from "@/layout/App.js";
const Routercom =()=>{
    return(
        <Router>
            <Switch>
                 <Route path="/" component={App}></Route>
            </Switch>
        </Router>
    )
}
export default Routercom;