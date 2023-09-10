import React from 'react';

const Pagination = ({ page, setPage }) => {
    const firstPage = 1;
    const lastPage = 27;
    const dots = 5;

    return (
        <div className='pagination'>
            <button className={page === firstPage ? 'disabled' : ''} disabled={page === firstPage} onClick={() => setPage(prev => prev - 1)}>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            {Array.from(Array(dots)).map((el, index) =>
                (1 + index) + (Math.floor((page - 1) / dots) * dots) <= lastPage &&
                <button key={index}
                    className={(1 + index) + (Math.floor((page - 1) / dots) * dots) === page ? '' : 'inactive'}
                    onClick={() => setPage((1 + index) + (Math.floor((page - 1) / dots) * dots))}>{(1 + index) + (Math.floor((page - 1) / dots) * dots)}
                </button>)}
            <button className={page === lastPage ? 'disabled' : ""} disabled={page === lastPage} onClick={() => setPage(prev => prev + 1)}>
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Pagination;