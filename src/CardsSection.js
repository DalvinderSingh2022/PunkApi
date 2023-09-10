import React, { useState } from 'react'
import useFetch from './useFetch';
import Card from './Card';
import Pagination from './Pagination';
import Search from './Search';

const CardsSection = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(null);
    const [isLoading, isError, beers] = useFetch(`beers?page=${page}&per_page=12${search ? `&beer_name=${search}` : ""}`);

    if (isError || isLoading) return;
    return (
        <>
            <Search search={search} setSearch={setSearch} />
            <section>
                <div className="cards">
                    {beers.map(beer => <Card {...beer} key={beer.id} />)}
                </div>
                <Pagination page={page} setPage={setPage} />
            </section>
        </>
    )
}

export default CardsSection;