import React from 'react'
import useFetch from './useFetch';
import Card from './Card';

const CardsSection = () => {
    const [isLoading, isError, beers] = useFetch("beers?page=1&per_page=12");

    if (isError || isLoading) return;
    return (
        <section className='cards'>
            {beers.map(beer => { console.log(beer); return <Card {...beer} key={beer.id} /> })}
        </section>
    )
}

export default CardsSection;