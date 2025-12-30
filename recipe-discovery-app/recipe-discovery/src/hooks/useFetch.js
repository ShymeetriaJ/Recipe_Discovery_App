import { useState, useEffect } from 'react';

const useFetch = (url) => {
    console.log('useFetch calling the url i need:', url);
    // My data state; updater
    const [data, setData] = useState();
    // My loading state; updater; has to load onmount, must be true
    const [loading, setLoading] = useState(true);
    // My error state; updater
    const [error, setError] = useState();

    useEffect(() => {
        console.log('useEffect starting fetch');

        const fetchData = async () => {
            try {
                console.log('Fetching data', url);

                const response = await fetch(url);
                console.log('Received', response);

                if (!response.ok) {
                    throw new Error(`Fetch error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Data parsed:', result);

                setData(result);
                setLoading(false);
                console.log('Data loading');

            } catch (error) {
                console.log('Error caught:', error.message);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };

};

export default useFetch;