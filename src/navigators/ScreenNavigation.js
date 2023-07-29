import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import Authentication from '../screens/Authentication';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ScreenNavigator;
