import React from 'react'
import './home.scss'
import {Link} from "react-router-dom";
import info from '../Input'
function Home() {
    return (
        <div className="home">
        <video autoPlay className="bg-video" loop>
                <source src={info.background} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>
        <h1> فرم نظرسنجی و ارتقاء سطح خدمت رسانی</h1>
            <img src={info.logo} alt="logo" className="logo"/>
           <Link to="/questions"> <button className="start">شروع</button></Link>
        </div>
    )
}

export default Home
