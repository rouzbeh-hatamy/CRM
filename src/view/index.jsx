import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.scss'

function index() {
    return (
        <div className="container">
            <video autoPlay className="bg-video" loop>
                <source src={require('../assets/bg.mp4')} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>
            <Router>
                
            </Router>
        </div>
    )
}

export default index
