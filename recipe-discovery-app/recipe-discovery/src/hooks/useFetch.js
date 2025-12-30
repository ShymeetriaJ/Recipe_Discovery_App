import { useState, useEffect } from 'react';

const useFetch = (url) => {
    console.log('useFetch calling the url i need:', url);
    // My data state; updater
    const [data, setData] = useState();
    // My loading state; updater; has to load onmount, must be true
    const [loading, setLoading] = useState(true);
    // My error state; updater
    const [error, setError] = useState();

}