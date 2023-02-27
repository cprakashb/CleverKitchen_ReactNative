import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, View, Alert } from 'react-native';
import { validateEmail } from '../helpers';
import { signUpUser } from '../services/api.service';

export default function Signup(props: { navigation: any }) {

  const [emailAddress, setEmailAddress] = useState("");
  const [confirmEmailAddress, setConfirmEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState('');


  async function handlePressSignUp() {
    if (emailAddress.length <= 0) {
      Alert.alert('Please enter a email address');
      return;
    }

    if (!validateEmail(emailAddress)) {
      Alert.alert('Please enter a valid email');
      return;
    }
    if (password.length <= 0) {
      Alert.alert('Please enter a password');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Please confirm password');
      return;
    }

    setStatus('Registering user...');

    signUpUser(emailAddress, password)
      .then(() => {
        setStatus('');
        console.log('User account created & signed in!');
        Alert.alert('Success, please login');
        props.navigation.goBack();
      })
      .catch(error => {
        setStatus('');
        if (error.code === 'auth/email-already-in-use') {
          console.log('Oops!! Email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('Oops!! Email address is invalid!');
        }

        console.error(error);
        Alert.alert(`${error}`);
      });

    return;
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmailAddress}
          value={emailAddress.toLowerCase()}
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmEmailAddress}
          value={confirmEmailAddress.toLowerCase()}
          placeholder="Confirm Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          textContentType="password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button} onPress={() => handlePressSignUp()}
          >
            <Text style={styles.signUpText}>{status.length > 0 ? status : 'Sign up'}</Text>
          </TouchableOpacity>
        </View >
      </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    backgroundColor: '#fff',
    justifyContent: "center",
    height: "100%"
  },
  signUpTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderLeftColor: "#FA6E3B",
    borderLeftWidth: 5,
  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  button: {
    backgroundColor: "#FA6E3B",
    padding: 10,
    borderRadius: 10,
    minWidth: 100
  },
  signUpText: {
    color: "#fff",
    textAlign: "center"
  }
});

