import React from 'react'
import image from '../img/4.jpg'

const PlayerList = () => {
    return (
        <div className="section">
        <h2 className="card title">OUR CLUB PLAYERS</h2>
        <div class="card">
                <div class="card-image">
                    <a href="blogpost.html">
                        <img src={image} alt="card image"></img>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card-image">
                    <a href="blogpost.html">
                        <img src={image} alt="card image"></img>
                    </a>
                </div>
            </div>

        </div>

    )
}

export default PlayerList;