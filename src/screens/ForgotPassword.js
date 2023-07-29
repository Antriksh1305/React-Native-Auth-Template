import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';

// constants
import { Colors } from '../constants/Colors';
import * as Screen from '../constants/Screen';
const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

// components
import { animateStyles3, transitionConfig } from '../components/Authentication/motiConfig';
import Svginserter from '../components/shared/Svginserter';
import { SnackBar } from '../components/shared/Snackbar';
import { handlePasswordReset } from '../components/Authentication/Inputchecker';

const ForgotPassword = React.memo((props) => {
      const [email, setEmail] = useState('');
      const [error, setError] = useState('');
      const [success, setSuccess] = useState(false);

      return (
            <>
                  <MotiView style={styles.lowercont} from={{ scale: 0.7, opacity: 0 }} animate={animateStyles3} transition={transitionConfig}>
                        <View style={styles.lowermaincont}>
                              <TouchableOpacity onPress={() => { props.setForgotpass(false); }}>
                                    <View style={styles.backbtn}>
                                          <View style={{ paddingRight: width / 196 }} >
                                                <Svginserter tag={'Back'} width={width / 14} height={width / 14} />
                                          </View>
                                    </View>
                              </TouchableOpacity>
                              <View style={styles.ForgotHeadingBox}>
                                    <Text style={styles.ForgotHeadingtxt}>Forgot{'\n'}password?</Text>
                              </View>
                              <View style={styles.inputTextBox}>
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Mail'} width={width / 16.2} height={width / 16.2} /></View>
                                    <View>
                                          <TextInput
                                                style={styles.input}
                                                onChangeText={setEmail}
                                                value={email}
                                                placeholder="Enter your email address"
                                                keyboardType="email-address"
                                                cursorColor={'black'}
                                                autoFocus={false}
                                          />
                                    </View>
                              </View>
                              <View style={styles.NoteBox}>
                                    <Text style={styles.NoteTxt}><Text style={{ color: Colors.palette_primary }}>*</Text> We will send you a message to set or reset your new password</Text>
                              </View>
                              <View style={styles.Sendbtncont}>
                                    <TouchableOpacity onPress={() => handlePasswordReset(email, setError, setSuccess, () => {
                                          setTimeout(() => {
                                                props.setForgotpass(false);
                                          }, 1000);
                                    })}>
                                          <View style={styles.Sendbtn}>
                                                <Svginserter tag={'ArrowRight'} width={width / 14} height={width / 14} />
                                          </View>
                                    </TouchableOpacity>
                              </View>
                        </View>
                        <SnackBar error={error} setError={setError} success={success} />
                  </MotiView>
            </>
      );
}, () => {
      return true;
});

const styles = StyleSheet.create({
      lowercont: {
            height: height / 1.6,
            alignItems: 'center',
      },
      lowermaincont: {
            width: width / 1.28,
            alignItems: 'flex-start',
      },
      backbtn: {
            width: width / 9,
            height: width / 9,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginTop: height / 28,
      },
      ForgotHeadingBox: {
            marginTop: height / 60,
            paddingLeft: width / 78,
      },
      ForgotHeadingtxt: {
            fontSize: width / 10,
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: Colors.body_dark,
      },
      inputTextBox: {
            width: width / 1.28,
            height: height / 13,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: width / 39.1,
            shadowColor: Colors.body_dark,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 8,
      },
      EntryLogoBox: {
            padding: height / 80,
      },
      input: {
            width: width / 1.65,
            height: height / 13,
            fontSize: width / 29,
      },
      NoteBox: {
            paddingTop: height / 40,
      },
      NoteTxt: {
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: height / 56.9,
            color: Colors.gray,
      },
      Sendbtncont: {
            width: width / 1.28,
            alignItems: 'flex-end',
            paddingTop: height / 20,
      },
      Sendbtn: {
            width: width / 7,
            height: width / 7,
            backgroundColor: Colors.palette_primary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
      },
});

export default ForgotPassword;
