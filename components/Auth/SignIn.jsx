import React, { useState } from 'react';
import {
    View, Text,
} from 'react-native';
import { Button, Input } from 'react-native-elements';

import PropTypes from 'prop-types';
import LineSandwich from '../LineSandwich';

import styles from './styles';

const signInUrl = '';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function clearFields() {
        setEmail('');
        setPassword('');
    }

    async function sendSignInRequest() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, password,
            }),
        };

        return (await fetch(signInUrl, requestOptions)).json();
    }

    async function onSignIn() {
        clearFields();
        const signInResponse = await sendSignInRequest();
        if (signInResponse.ok) {
            // Proceed to home page
            navigation.navigate('Home');
        } else {
            // Render errors
        }

        // Do something with response from backend
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign In</Text>
            <View style={styles.formData}>
                <Input label="Email" onChange={setEmail} />
                <Input label="Password" onChange={setPassword} />
            </View>
            <Button title="Sign In" onPress={onSignIn} />
            <View style={styles.seprator}>
                <LineSandwich>
                    <Text>OR</Text>
                </LineSandwich>
            </View>
            <Button title="Sign Up" onPress={() => { navigation.navigate('SignUp'); }} />
        </View>

    );
}

SignIn.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};
