import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState(''); // default value of empty string
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        })
    };

    return ( 
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')}
                    title="Bit Spender"
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;