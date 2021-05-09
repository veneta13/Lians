import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import TitlePage from './components/TitlePage';
import Settings from './components/Settings';
import OrderLocator from './components/OrderLocator/OrderLocator';

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer style={styles.container}>
            <StatusBar style="auto" />
            <Stack.Navigator
                initialRouteName="TitlePage"
            >
                <Stack.Screen
                    name="TitlePage"
                    component={OrderLocator}
                    options={{
                        title: 'Home',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'Sign Up',
                    }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'Sign In',
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        title: 'Settings',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 300,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
