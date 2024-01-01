import React from 'react';

const Card = () => {
    return(
        <div>
            <img src="https://robohash.org/ + {props.name}"  alt="img" />
            <div>
                <h2>"{props.rname}"</h2>
                <p>I am a robo</p>
            </div>
        </div>
    )
}

export default Card;