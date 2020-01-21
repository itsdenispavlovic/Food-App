import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result)
    {
        return null;
    }
    // console.log(result);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{result.name}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false} // to hide the scrollbar
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image 
                        source={{ uri: item }}
                        style={styles.image}
                    />
                }}
            />
            <Text>Phonenumber: {result.display_phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center'
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 4,
        marginBottom: 5,
        marginRight: 5
    }
});

export default ResultsShowScreen;