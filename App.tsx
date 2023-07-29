/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';

import ScreenNavigator from './src/navigators/ScreenNavigator';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <ScreenNavigator />
        </SafeAreaView>
    );
};

export default App;
