import React from 'react';
import './card.css'

const Card = (props) => {
    const {name,rname,em} = props;
    const robolink = "https://robohash.org/"+name;
    return(
        <div className='card-div'>
            <img className='card-img' src={robolink}  alt="img" />
            <div className='card-info'>
                <h2 className='info-name'>{rname}</h2>
                <p className='info-em'>{em}</p>
            </div>
        </div>
    )
}

export default Card;