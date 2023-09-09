import React, { memo } from 'react'

const Card = ({ name, tagline, image_url }) => {
    return (
        <div className='card'>
            <div className="image"><img src={image_url} alt={name} /></div>
            <div>
                <h4 className='name'>{name}</h4>
                <h5 className='tagline'>{tagline}</h5>
            </div>
            <button>View</button>
        </div>
    )
}

export default memo(Card);