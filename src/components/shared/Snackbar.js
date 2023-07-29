/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Snackbar } from 'react-native-paper';

// Constants
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

export const SnackBar = ({ error, setError, success }) => {
    return (
        <SafeAreaProvider style={styles.snackbarBox}>
            <Snackbar
                visible={!!error}
                onDismiss={() => setError('')}
                duration={4000}
                action={{
                    label: success ? 'OK' : 'Close',
                    onPress: () => setError(''),
                }}
                style={[styles.snackbar,
                { backgroundColor: success ? '#4caf50' : '#323232' },
                ]}
            >
                {error}
            </Snackbar>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    snackbarBox: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 1000,
    },
    snackbar: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        height: width / 7.82,
        width: width * 0.961,
    },
});
