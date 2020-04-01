import React from 'react';
import './card.style.css';

const Card = ({name, email, id}) => {
    return (
    <div className='card-container'>
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    </div>

    );
}

export default Card;