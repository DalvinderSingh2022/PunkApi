import React, { useState } from 'react';

const Search = ({ setSearch }) => {
    const [value, setValue] = useState(null);
    const handelSubmit = (e) => {
        e.preventDefault();
        setSearch(value);
    }
    return (
        <section className='search'>
            <h1>Beer is Good</h1>
            <h1>But, Beers are Better</h1>
            <form className="options">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Enter beer name...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={(e) => handelSubmit(e)}><i class="fa-solid fa-magnifying-glass"></i>search</button>
            </form>
        </section>
    )
}

export default Search;