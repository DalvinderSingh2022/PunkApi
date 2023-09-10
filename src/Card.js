import React, { memo } from 'react'

const Card = ({ name, tagline, image_url }) => {
    return (
        <div className='card'>
            <div className="image"><img src={image_url || 'https://cdn.pixabay.com/photo/2014/04/03/10/23/bottle-310313_640.png'} alt={name} /></div>
            <div>
                <h4 className='name'>{name}</h4>
                <h5 className='tagline'>{tagline}</h5>
            </div>
            <button>View</button>
        </div>
    )
}

export default memo(Card);