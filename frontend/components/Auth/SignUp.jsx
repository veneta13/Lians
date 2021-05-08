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
            <View style={styles.formData}>
                <Text>{name}</Text>
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
                title="Create"
                onPress={onSignUp}
            />
        </View>
    );
}
