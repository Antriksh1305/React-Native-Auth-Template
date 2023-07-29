/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Snackbar } from 'react-native-paper';
import * as Screen from '../../constants/Screen';
import { StyleSheet } from 'react-native';

const width = Screen.SCREEN_WIDTH;

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
                    { backgroundColor: success ? '#4caf50' : '#323232', height: 50, alignItems: 'center' },
                ]}
            >
                {error}
            </Snackbar>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    snackbar: {
        flex: 1,
        alignSelf: 'flex-start',
        zIndex: 1000,
    },
});
