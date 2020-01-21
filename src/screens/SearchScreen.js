import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState(''); // default value of empty string
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        // console.log('Hi there!');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose' // city in california
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

    return ( 
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;