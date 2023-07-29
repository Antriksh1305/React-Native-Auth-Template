import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MotiView } from 'moti';

// constants
import * as Screen from '../constants/Screen';

const width = Screen.SCREEN_WIDTH;

// components
import { animateStyles, transitionConfig } from '../components/Authentication/motiConfig';
import Mainheader from '../components/Authentication/SignUp/Mainheader';
import InputBox from '../components/Authentication/AuthInputBox';
import Footer from '../components/Authentication/SignUp/Footer';
import { SnackBar } from '../components/shared/Snackbar';
import { handleSignupPress, onGoogleButtonPress } from '../components/Authentication/Inputchecker';

const Signup = (props) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPass, setConfirmPass] = useState('');
      const [error, setError] = useState('');
      const [success,setSuccess] = useState(false);

      return (
            <MotiView
                  style={styles.lowercont}
                  from={{ translateX: width, opacity: 0 }}
                  animate={animateStyles}
                  transition={transitionConfig}
            >
                  <Mainheader onGoogleButtonPress={() => onGoogleButtonPress(setError,setSuccess)} />
                  <View>
                        <InputBox SvgName={'Account'} onChangeText={setName} value={name} placeholder={'Enter Your First Name'} />
                        <InputBox SvgName={'Email'} onChangeText={setEmail} value={email} placeholder={'Enter Your Email'} />
                        <InputBox SvgName={'Password'} onChangeText={setPassword} value={password} placeholder={'Enter Your Password'} />
                        <InputBox
                              SvgName={'ConfirmPass'}
                              onChangeText={setConfirmPass}
                              value={confirmPass}
                              password={password}
                              placeholder={'Confirm Password'}
                        />
                  </View>
                  <Footer handleSignupPress={() => handleSignupPress(name,email,password,confirmPass,setError,setSuccess)} setLogin={props.setLogin} />
                  <SnackBar error={error} setError={setError} success={success} />
            </MotiView>
      );
};

const styles = StyleSheet.create({
      lowercont: {
            flex: 1,
            alignItems: 'center',
      },
      spinner: {
            marginVertical: width / 39.1,
      },
      snackbar: {
            marginBottom: width / 39.1,
      },
      modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});

export default Signup;
