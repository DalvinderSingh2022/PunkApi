import React, { memo } from 'react'

const Card = ({ beer, setBeer }) => {
    const { name, tagline, image_url } = beer;

    return (
        <div className='card'>
            <img src={image_url || 'https://cdn.pixabay.com/photo/2014/04/03/10/23/bottle-310313_640.png'} alt={name} />
            <div>
                <h4 className='name'>{name}</h4>
                <h5 className='tagline'>{tagline}</h5>
            </div>
            <button onClick={() => setBeer(beer)}>View</button>
        </div>
    )
}

export default memo(Card);