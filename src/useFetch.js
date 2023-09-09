import { useState, useEffect } from 'react';

function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, SetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.punkapi.com/v2/' + url);
                const result = await response.json();
                SetData(result);
                setIsLoading(false)
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url])

    return [isLoading, isError, data];
}

export default useFetch;