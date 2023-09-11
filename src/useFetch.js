import { useState, useEffect } from 'react';

function useFetch(url, page) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);
    const [lastPage, setLastPage] = useState([]);
    var pageCount = 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.punkapi.com/v2/' + url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setIsError(true);
            }
        }

        const setLastpage = async () => {
            try {
                const response = await fetch('https://api.punkapi.com/v2/' + url.replace(`page=${page}`, `page=${pageCount}`));
                const result = await response.json();
                if (result.length > 0) {
                    pageCount++;
                    setLastpage();
                } else {
                    setLastPage(pageCount - 1);
                    setIsLoading(false);
                }
            } catch {
                setIsError(true);
                setIsLoading(false);
            }
        };

        fetchData();
        setLastpage();

    }, [url, pageCount, page])

    return [isLoading, isError, data, lastPage];
}

export default useFetch;