import React from 'react'

function Questions() {

    return (
        <div>
        <video autoPlay className="bg-video blur" loop>
                <source src={require('../../assets/bg.mp4')} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>
            <div></div>
        </div>
    )
}

export default Questions
