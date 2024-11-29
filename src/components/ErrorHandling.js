import React, { useState } from 'react';

const ErrorHandling = () => {
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setError(false);

        fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data.');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(true);
                setLoading(false);
            });
    };

    return (
        <div>
            <h1>Error Handling Example</h1>
            {loading && <p>Loading...</p>}
            {error && (
                <div>
                    <p>Failed to fetch data. Please try again.</p>
                    <button onClick={fetchData}>Retry</button>
                </div>
            )}
            {data && <p>Data loaded successfully!</p>}
            {!loading && !error && !data && (
                <button onClick={fetchData}>Fetch Data</button>
            )}
        </div>
    );
};

export default ErrorHandling;
