import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
import Card from './Card';
import Pagination from './Pagination';
import Search from './Search';
import Popup from './Popup';
import './index.css';
import Error from './Error';
import Loading from './Loading';

const App = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(null);
    const [beer, setBeer] = useState(null);
    const [isLoading, isError, beers, lastPage] = useFetch(`beers?page=${page}&per_page=12${search ? `&beer_name=${search}` : ""}`, page);

    useEffect(() => setPage(1), [search]);

    if (isError) return <Error />;

    if (isLoading) return <Loading />;
    return (
        <main>
            <Search search={search} setSearch={setSearch} />
            <section>
                <div className="cards">
                    {beers.map(beer => <Card beer={beer} setBeer={setBeer} key={beer.id} />)}
                </div>
                <Pagination page={page} setPage={setPage} lastPage={lastPage} />
            </section>
            {beer && <Popup setBeer={setBeer} beer={beer} />}
        </main>
    )
}

export default App;