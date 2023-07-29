/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

//constants
import { Colors } from '../constants/Colors';

//api
import { ListData } from '../api/Data';

//components
import List from '../components/Home/List';

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const DATA = await ListData();
                setData(DATA);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color={Colors.palette_primary} />
                </View>
            ) : (
                <List data={data} />
            )}
        </View>
    );
};

export default Home;
