import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Lottie from 'lottie-react-native';
import { MotiView } from 'moti';

// constants
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

// components
import { animateStyles2, transitionConfig } from './motiConfig';

const Header = (props) => {
    return (
        <MotiView
            style={styles.upper}
            from={{ translateY: -height * 0.35 }}
            animate={animateStyles2}
            transition={transitionConfig}
        >
            <View style={styles.loginAnimBox}>
                <Lottie
                    source={require('../../../assets/animation/login_animation.json')}
                    autoPlay
                    loop
                    style={styles.loginAnim}
                />
            </View>
            <View style={styles.loginSigninHeaderBox}>
                <Pressable style={styles.AuthCmnHeaderBox} onPress={props.handleLoginPress}>
                    <Text style={styles.HeaderCommontxt}>Login</Text>
                </Pressable>
                <Pressable style={styles.AuthCmnHeaderBox} onPress={props.handleSignupPress}>
                    <Text style={styles.HeaderCommontxt}>Sign-up</Text>
                </Pressable>
            </View>
            <MotiView
                style={styles.MovingHighlight}
                from={{ translateX: 0 }}
                animate={props.login ? { translateX: 0 } : { translateX: width / 2.41 }}
                transition={{
                    type: 'spring',
                    duration: 800,
                }}
            />
        </MotiView>
    );
};

const styles = {
    upper: {
        width,
        height: height * 0.35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 20,
        elevation: 4,
    },
    loginAnimBox: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: height / 25,
    },
    loginAnim: {
        width: width / 1.7,
        height: width / 1.7,
    },
    loginSigninHeaderBox: {
        flex: 0.2,
        width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: width / 12,
    },
    AuthCmnHeaderBox: {
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
    },
    HeaderCommontxt: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: width / 23,
    },
    MovingHighlight: {
        width: width * 0.33,
        maxWidth: 160,
        height: width / 97.75,
        maxHeight: 6,
        borderRadius: 20,
        backgroundColor: Colors.palette_primary,
        position: 'relative',
        right: width / 4.768,
    },
};

export default Header;
