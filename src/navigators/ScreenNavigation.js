import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Authentication from '../screens/Authentication';
import Home from '../screens/Home';

//constants
import { Colors } from '../constants/Colors';
import * as Screen from '../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: Colors.palette_primary,
                    },
                    headerTitleStyle: {
                        color: Colors.palette_white,
                        fontFamily: 'SF-Pro-Rounded-Semibold',
                        fontSize: width / 15.04,
                    },
                    headerTitle: 'Universities List',
                    headerBackVisible: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ScreenNavigator;
