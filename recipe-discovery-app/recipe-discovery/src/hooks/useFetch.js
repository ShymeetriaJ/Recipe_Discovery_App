import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
              
                if (!response.ok) {
                    throw new Error(`Fetch error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                setLoading(false);

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;