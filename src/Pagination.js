import React from 'react'

const Pagination = ({ page, setPage }) => {

    return (
        <div className='pagination'>
            <button className={page === 1 ? 'disabled' : ''} disabled={page !== 1} onClick={() => setPage(prev => prev - 1)}>Prev</button>
            {Array.from(Array(5)).map((el, index) =>
                <button key={index}
                    className={(index + 1) === page ? '' : 'inactive'}
                    onClick={() => setPage(prev => prev + index)}>{page + index}</button>)}
            <button className={page === 28 ? 'disabled' : ""} disabled={page !== 28} onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>
    )
}

export default Pagination;