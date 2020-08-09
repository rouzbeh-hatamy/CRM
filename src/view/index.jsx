import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss'
import Home from '../components/Home/Home'
import Questions from '../components/Questions/Questions';

function index() {
    return (
        <div className="container">
            
            <Router>
                <Switch>
                    <Route path="/questions">
                        <Questions/>
                    </Route>
                    <Route path="/finish"></Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default index
