import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import TitlePage from './components/TitlePage';
import Settings from './components/Settings';
import OrderLocator from './components/OrderLocator/OrderLocator';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default function App() {
    const Stack = createStackNavigator();

    useEffect(() => {
        getPushNotificationPermissions();
      });
    
    
      const getPushNotificationPermissions = async () => {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
    
        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (existingStatus !== 'granted') {
          // Android remote notification permissions are granted during the app
          // install, so this will only ask on iOS
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
    
        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
          return;
        }
        console.log(finalStatus)
    
        // Get the token that uniquely identifies this device
        console.log("Notification Token: ", (await Notifications.getExpoPushTokenAsync()));
      }
    return (
        <NavigationContainer style={styles.container}>
            <StatusBar style="auto" />
            <Stack.Navigator
                initialRouteName="TitlePage"
            >
                <Stack.Screen
                    name="TitlePage"
                    component={Settings}
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
