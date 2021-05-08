import React, { useState } from 'react';
import {
  SafeAreaView, Text, TextInput, Button,
} from 'react-native';

import PropTypes from 'prop-types';

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

    // Do something with response from backend
  }

  return (
    <SafeAreaView>
      <Text>Sign In</Text>

      <TextInput
        label="Email"
        onChange={setEmail}
      />
      <TextInput
        label="Password"
        onChange={setPassword}
      />
      <Button
        title="Create"
        onPress={onSignIn}
      />
    </SafeAreaView>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
