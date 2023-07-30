import React, { useState, memo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

//constants
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

//components
import { SnackBar } from '../shared/Snackbar';

const handleLinkPress = (link, setError) => {
    let url = JSON.stringify(link);

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    Linking.openURL(url)
        .catch((error) => {
            setError('Error Opening Url');
        });
};

const Item = memo((props) => {
    return (
        <>
            <View style={styles.universityBox}>
                <View>
                    <Text style={styles.universityNameTxt}>{props.name}</Text>
                </View>
                <View style={styles.regionBox}>
                    <View style={styles.regionTitleBox}>
                        <Text style={styles.regionTitleTxt}>Region:</Text>
                    </View>
                    <View>
                        {props.state_province !== null ? (
                            <Text style={styles.regionContentTxt}>{props.state_province}</Text>
                        ) : (
                            <Text style={styles.NotAvailableTxt}>Not Available</Text>
                        )}
                    </View>
                </View>
                <View style={styles.websiteBox}>
                    <View style={styles.websiteTitleBox}>
                        <Text style={styles.websiteTitleTxt}>Website:</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleLinkPress(props.web_pages, props.setError)}>
                        <Text style={styles.websiteLinkTxt}>{props.web_pages}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
});

const List = memo((props) => {
    const [error, setError] = useState('');

    const renderItem = ({ item }) => {
        return <Item name={item.name} state_province={item['state-province']} web_pages={item.web_pages} setError={setError} />;
    };

    return (
        <>
            <View style={styles.mainContainer}>
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    maxToRenderPerBatch={10}
                    windowSize={10}
                />
                <SnackBar error={error} setError={setError} />
            </View>
        </>
    );
});

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: width / 39.1,
    },
    universityBox: {
        width: width * 0.94,
        alignSelf: 'center',
        marginVertical: height / 99.125,
        paddingHorizontal: width / 39.1,
        paddingVertical: height / 61,
        borderRadius: 12,
        backgroundColor: Colors.text_gray_light,
    },
    universityNameTxt: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Text-Semibold',
        color: Colors.palette_secondary,
        opacity: 0.7,
    },
    regionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width / 26.07,
    },
    regionTitleBox: {
        width: width * 0.22,
        paddingRight: width / 78.2,
    },
    regionTitleTxt: {
        fontSize: width / 24.4375,
        fontFamily: 'SF-Pro-Text-Medium',
    },
    regionContentTxt: {
        fontSize: width / 26.07,
        fontFamily: 'SF-Pro-Text-Medium',
    },
    NotAvailableTxt: {
        fontSize: width / 26.07,
        fontStyle: 'italic',
        color: 'gray',
    },
    websiteBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width / 78.2,
    },
    websiteTitleBox: {
        width: width * 0.22,
        paddingRight: width / 78.2,
    },
    websiteTitleTxt: {
        fontSize: width / 24.4375,
        fontFamily: 'SF-Pro-Text-Medium',
    },
    websiteLinkTxt: {
        fontSize: width / 26.07,
        fontFamily: 'SF-Pro-Text-Medium',
    },
});

export default List;
