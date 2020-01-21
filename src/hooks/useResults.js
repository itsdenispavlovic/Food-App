import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        // console.log('Hi there!');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'los angeles' // city in california
                }
            }); // we will wait for some response to come back with some actually data
            setResults(response.data.businesses);
        } catch(err)
        {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component is first rendered
    // THIS IS BAD CODE!!!
    // searchApi('pasta'); because we will go an infinite loop!
    // THIS IS GOOD! =))
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};