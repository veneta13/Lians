import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import {
    View, Text,
} from 'react-native';
import LineSandwich from '../LineSandwich';
import { API_URL } from '../../env';

import styles from './styles';
import * as Store from '../../store';

const signUpURL = `${API_URL}/register`;

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function clearFields() {
        setName('');
        setEmail('');
        setPassword('');
    }

    async function sendSignUpRequest() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name, email, password,
            }),
        };

        return (await fetch(signUpURL, requestOptions)).json();
    }

    async function onSignUp() {
        clearFields();
        const signUpResponse = await sendSignUpRequest();
        if (signUpResponse.token) {
            // Registration succesful
            // Store token somewhere secure
            Store.setItem('token', signUpResponse.token, {});
            navigation.navigate('OrderLocator');
        } else {
            // Registration failed
            setErrorMessage(signUpResponse.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formData}>
                <Text style={styles.header}>Sign Up</Text>
                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }
                <Input
                    value={name}
                    label="Name"
                    onChangeText={setName}
                />
                <Input
                    value={email}
                    label="Email"
                    onChangeText={setEmail}
                />
                <Input
                    value={password}
                    label="Password"
                    onChangeText={setPassword}
                />

            </View>
            <Button
                title="Sign Up"
                onPress={onSignUp}
            />
            <View style={styles.seprator}>
                <LineSandwich>
                    <Text>OR</Text>
                </LineSandwich>
            </View>
            <Button title="Sign In" onPress={() => { navigation.navigate('SignIn'); }} />
        </View>
    );
}
