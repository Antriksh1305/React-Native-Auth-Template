import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Lottie from 'lottie-react-native';
import * as Screen from '../../../constants/Screen';
import { Colors } from '../../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const GoogleBtn = (props) => {
    return (
        <View>
            <TouchableHighlight style={styles.GoogleHighlightBox} onPress={props.handleonPress}>
                <View style={styles.Googlebtnbox}>
                    <View style={styles.GoogleLogoAnim} >
                        <Lottie source={require('../../../../assets/animation/googleLogoAnim.json')} autoPlay={true} loop={true} style={styles.GoogleLoginLogo} />
                    </View>
                    <View>
                        <Text style={styles.Googlebtntext}>Log In with Google</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = {
    GoogleHighlightBox: {
        width: width / 1.28,
        height: width / 6.4,
        alignSelf: 'center',
        borderRadius: 30,
        margin: height / 25,
    },
    Googlebtnbox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.palette_white,
    },
    GoogleLogoAnim: {
        width: width / 8,
        height: width / 8,
    },
    Googlebtntext: {
        fontSize: width / 21,
        fontFamily: 'SF-Pro-Rounded-Heavy',
        color: 'rgba(0,0,0,0.50)',
        paddingHorizontal: width / 30,
        letterSpacing: 0.5,
    },
    GoogleLoginLogo: {
        width: width / 8.68,
        height: width / 8.68,
    },
};

export default GoogleBtn;
