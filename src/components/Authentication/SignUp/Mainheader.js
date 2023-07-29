import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';
import { Colors } from '../../../constants/Colors';
import * as Screen from '../../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Mainheader = ({ onGoogleButtonPress }) => {
    return (
        <View style={styles.lowerHeading}>
            <View>
                <Text style={styles.registertxt}>Register</Text>
            </View>
            <TouchableOpacity onPress={onGoogleButtonPress}>
                <View style={styles.GoogleRegisterBox}>
                    <Lottie source={require('../../../../assets/animation/googleLogoAnim.json')} autoPlay={true} loop={true} style={styles.GoogleRegisterLogo} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    lowerHeading: {
        paddingTop: height / 45,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width / 9,
    },
    registertxt: {
        fontSize: width / 8.7,
        fontFamily: 'SF-Pro-Rounded-Bold',
        color: Colors.body_dark,
        letterSpacing: 0.8,
    },
    GoogleRegisterBox: {
        width: width / 7.82,
        height: width / 7.82,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    GoogleRegisterLogo: {
        width: width / 8.68,
        height: width / 8.68,
    },
};

export default Mainheader;
