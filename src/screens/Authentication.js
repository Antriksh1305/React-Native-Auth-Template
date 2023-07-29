import React, { useState, useMemo } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

//constants
import { Colors } from '../constants/Colors';
import * as Screen from '../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

//components
import Header from '../components/Authentication/Header';

//screens
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const AuthenticationPage = () => {
    const [login, setLogin] = useState(true);
    const [forgotpass, setForgotpass] = useState(false);

    const handleLoginPress = useMemo(() => () => setLogin(true), []);
    const handleSignupPress = useMemo(() => () => {
        console.log('signup');
        setLogin(false);
        setForgotpass(false);
    }, []);

    console.log('render');
    return (
        <ScrollView style={styles.maincont}>
            <Header handleLoginPress={handleLoginPress} handleSignupPress={handleSignupPress} login={login} />
            <View>
                {login ? (
                    forgotpass ? (
                        <ForgotPassword setForgotpass={setForgotpass} />
                    ) : (
                        <Login setForgotpass={setForgotpass} />
                    )
                ) : (
                    <Signup setLogin={setLogin} />
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    maincont: {
        flex: 1,
        backgroundColor: Colors.bg,
    },
    upper: {
        width,
        height: height * 0.35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
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
        backgroundColor: '#57A2E7',
        position: 'relative',
        right: width / 4.768,
    },
});

export default AuthenticationPage;
