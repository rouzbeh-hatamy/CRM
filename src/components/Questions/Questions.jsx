import React from 'react'

function Questions() {
    return (
        <div>
        <video autoPlay className="bg-video blur" loop>
                <source src={require('../../assets/bg.mp4')} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>
            <h1>Got you</h1>
        </div>
    )
}

export default Questions
