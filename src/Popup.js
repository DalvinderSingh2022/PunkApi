import React from 'react'

const Popup = ({ beer, setBeer }) => {
    const { name, tagline, image_url, description, ph, volume, attenuation_level, food_pairing } = beer;

    return (
        <div className='popup' onClick={() => setBeer(null)}>
            <div className="beer">
                <i class="fa-solid fa-circle-xmark close" onClick={() => setBeer(null)}></i>
                <img src={image_url || 'https://cdn.pixabay.com/photo/2014/04/03/10/23/bottle-310313_640.png'} alt={name} />
                <div>
                    <h4 className='name'>{name}</h4>
                    <h5 className='tagline'>{tagline}</h5>
                </div>
                <p className='description'>{description}</p>
                <div><span className='large'>{ph}</span><span className='small'>pH</span></div>
                <div><span className='large'>{volume.value}</span><span className='small'>{volume.unit}</span></div>
                <div><span className='large'>{attenuation_level}</span><span className='small'>Attenuation Level</span></div>
                <div className='food_pairing'>
                    {food_pairing.map(food => <button key={food} disabled>{food}</button>)}
                </div>
            </div>
        </div>
    )
}

export default Popup;