import React from 'react';
import { View, TextInput } from 'react-native';
import Lottie from 'lottie-react-native';

//constants
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

//components
import Svginserter from '../shared/Svginserter';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const InputBox = (props) => {
    return (
        <>
            <View style={styles.inputTextBox}>
                <View style={styles.EntryLogoBox}>
                    {props.SvgName !== 'ConfirmPass' || props.value === '' ?
                        (<Svginserter tag={props.SvgName} width={width / 16.2} height={width / 16.2} />)
                        : (props.value === props.password ?
                            <Lottie source={require('../../../assets/animation/Tick-Sign-Anim.json')} autoPlay={true} loop={false} duration={1500} style={styles.PasscheckLogo} />
                            : <Lottie source={require('../../../assets/animation/Cross-Sign_Anim.json')} autoPlay={true} loop={false} duration={1500} style={styles.PasscheckLogo} />)}
                </View>
                <View><TextInput
                    style={styles.input}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={props.placeholder}
                    keyboardType="email-address"
                    cursorColor={Colors.palette_secondary}
                    autoFocus={false}
                />
                </View>
            </View>
        </>
    );
};

const styles = {
    inputTextBox: {
        width: width / 1.28,
        height: height / 13,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: width / 39.1,
        shadowColor: Colors.body_dark,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 8,
    },
    EntryLogoBox: {
        padding: width / 39,
    },
    input: {
        width: width / 1.65,
        height: height / 13,
        fontSize: width / 30,
    },
    PasscheckLogo: {
        width: width / 16.2,
        height: width / 16.2,
    },
};

export default InputBox;
