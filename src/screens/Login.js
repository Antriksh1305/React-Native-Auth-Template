/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';

// Constants
import * as Screen from '../constants/Screen';
import { Colors } from '../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

// Components
import { animateStyles, transitionConfig } from '../components/Authentication/motiConfig';
import InputBox from '../components/Authentication/AuthInputBox';
import GoogleBtn from '../components/Authentication/Login/GoogleBtn';
import { SnackBar } from '../components/shared/Snackbar';
import { handleLoginPress, onGoogleButtonPress } from '../components/Authentication/Inputchecker';

const Login = React.memo((props) => {
      const [email, onChangeEmail] = useState('');
      const [password, onChangePassword] = useState('');
      const [error, setError] = useState('');
      const [success,setSuccess] = useState(false);

      return (
            <MotiView style={styles.lowercont} from={{ translateX: -width, opacity: 0 }} animate={animateStyles} transition={transitionConfig} >
                  <View style={styles.InputBoxes}>
                        <InputBox SvgName={'Email'} onChangeText={onChangeEmail} value={email} placeholder={'Enter Your Email'} />
                        <InputBox SvgName={'Password'} onChangeText={onChangePassword} value={password} placeholder={'Enter Your Password'} />
                  </View>
                  <View style={styles.forgotPassBox}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => props.setForgotpass(true)}>
                              <Text style={styles.forgotpasstext}>Forgot Password?</Text>
                        </TouchableOpacity>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.55} style={styles.btnhighlight} onPress={() => handleLoginPress(email, password, setError, setSuccess)}>
                              <View style={styles.btnbox}>
                                    <Text style={styles.btntxt}>Login</Text>
                              </View>
                        </TouchableOpacity>
                        <View style={styles.SeparatorBox}>
                              <View style={styles.lineSeparator} />
                              <Text style={styles.Or_Separator}>Or</Text>
                              <View style={styles.lineSeparator} />
                        </View>
                        <GoogleBtn handleonPress={() => onGoogleButtonPress(setError,setSuccess)} />
                  </View>
                  <SnackBar error={error} setError={setError} success={success} />
            </MotiView>
      );
},(prevProps,nextProps) => {
      return true;
});

const styles = StyleSheet.create({
      lowercont: {
            width,
            alignItems: 'center',
      },
      InputBoxes: {
            paddingTop: height / 22,
      },
      forgotPassBox: {
            width: width / 1.28,
            paddingLeft: width / 60,
            paddingTop: width / 80,
      },
      forgotpasstext: {
            fontFamily: 'SF-Pro-Text-Semibold',
            color: Colors.body_dark,
            fontSize: width / 27.9,
      },
      btnhighlight: {
            width: width / 1.28,
            height: width / 6.4,
            alignSelf: 'center',
            borderRadius: 30,
            margin: height / 25,
      },
      btnbox: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: Colors.body_light,
      },
      btntxt: {
            fontSize: width / 23,
            fontFamily: 'SF-Pro-Rounded-Bold',
            letterSpacing: 0.8,
            color: '#FFFFFF',
      },
      SeparatorBox: {
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            bottom: height / 158,
      },
      lineSeparator: {
            backgroundColor: '#000000',
            width: width / 4,
            height: width / 195.5,
            borderRadius: 10,
            marginHorizontal: width / 22,
      },
      Or_Separator: {
            fontSize: width / 21.5,
            fontFamily: 'SF-Pro-Rounded-Bold',
      },
      spinner: {
            marginVertical: height / 10,
      },
});

export default Login;
