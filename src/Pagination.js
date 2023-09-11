import React, { memo } from 'react';

export const Pagination = ({ page, setPage, lastPage }) => {
    console.log(lastPage)
    var firstPage = 1;
    var dots = 5;

    return (
        <div className='pagination'>
            <button className={page === firstPage ? 'disabled' : ''} disabled={page === firstPage} onClick={() => setPage(prev => prev - 1)}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            {Array.from(Array(dots)).map((el, index) => (1 + index) + (Math.floor((page - 1) / dots) * dots) <= lastPage &&
                <button key={index}
                    className={(1 + index) + (Math.floor((page - 1) / dots) * dots) === page ? '' : 'inactive'}
                    onClick={() => setPage((1 + index) + (Math.floor((page - 1) / dots) * dots))}>{(1 + index) + (Math.floor((page - 1) / dots) * dots)}
                </button>)}

            <button className={page === lastPage ? 'disabled' : ""} disabled={page === lastPage} onClick={() => setPage(prev => prev + 1)}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default memo(Pagination);