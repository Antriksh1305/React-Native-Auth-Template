/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Snackbar } from 'react-native-paper';

// Constants
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export const SnackBar = ({ error, setError, success }) => {
    return (
        <SafeAreaProvider style={styles.snackbar}>
            <Snackbar
                visible={!!error}
                onDismiss={() => setError('')}
                duration={4000}
                action={{
                    label: success ? 'OK' : 'Close',
                    onPress: () => setError(''),
                }}
                style={[
                    { backgroundColor: success ? '#4caf50' : '#323232', height: 50, alignItems: 'center', position: 'absolute', bottom: 0 , left: 0, width: width*0.961 },
                ]}
            >
                {error}
            </Snackbar>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    snackbar: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 1000,
    },
});
