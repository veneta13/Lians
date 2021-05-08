import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';

import {
    View, Text,
} from 'react-native';
import styles from './styles';

const signUpURL = '';

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    // Do something with response from backend
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <View style={styles.formData}>
                <Input
                    label="Name"
                    onChange={setName}
                />
                <Input
                    label="Email"
                    onChange={setEmail}
                />
                <Input
                    label="Password"
                    onChange={setPassword}
                />

            </View>
            <Button
                title="Create"
                onPress={onSignUp}
            />
        </View>
    );
}
