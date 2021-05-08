import React, { useState } from 'react';
import {
  SafeAreaView, Text, TextInput, Button,
} from 'react-native';

const signUpURL = '';

export default function SignIn({ navigation }) {
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
    <SafeAreaView>
      <Text>Sign Up</Text>

      <TextInput
        label="Name"
        onChange={setName}
      />
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
        onPress={onSignUp}
      />
    </SafeAreaView>
  );
}
