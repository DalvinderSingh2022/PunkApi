import React, { useState } from 'react'
import useFetch from './useFetch';
import Card from './Card';
import Pagination from './Pagination';

const CardsSection = () => {
    const [page, setPage] = useState(1);
    const [isLoading, isError, beers] = useFetch(`beers?page=${page}&per_page=12`);

    if (isError || isLoading) return;
    return (
        <section>
            <div className="cards">
                {beers.map(beer => <Card {...beer} key={beer.id} />)}
            </div>
            <Pagination page={page} setPage={setPage} />
        </section>
    )
}

export default CardsSection;