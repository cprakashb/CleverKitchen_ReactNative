import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, View, Alert } from 'react-native';
import commonStyles from "../styles/common";
import { fetchUser, signInAsync } from '../services/api.service';
import { useAppData } from '../providers/AppState';
import { User } from '../common/types';


export default function SignIn(props: { navigation: any }) {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState('');
    const { setActiveUser } = useAppData();

    const handlePressSignIn = async () => {
        if (emailAddress.length <= 0) {
            Alert.alert('Please enter a email address');
            return;
        }
        if (password.length <= 0) {
            Alert.alert('Please enter a password');
            return;
        }

        setStatus('Authenticating ..');
        signInAsync(emailAddress, password)
            .then(userDetails => {
                let currentUser = { id: userDetails.user.uid, emailId: userDetails.user.email }
                loadUserProfile(currentUser)
            })
            .catch(error => {
                setStatus('')
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    Alert.alert("Authentication Error", `Email address is already in use`)
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    Alert.alert("Authentication Error", `Email address is invalid`)
                }

                console.error(error);
                Alert.alert(`${error}`);
            });
    }

    async function loadUserProfile(userDetails: User) {
        console.log('Loading user profile...');
        const loadedUser = await fetchUser(userDetails);
        if (!loadedUser) {
            Alert.alert('Something went wrong');
            return;
        }
        setActiveUser(loadedUser);
        props.navigation.reset({ index: 0, routes: [{ name: 'Tabs' }] })
        setStatus('');
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={styles.bodyContainer}>
                <Text style={styles.signInTitle}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmailAddress}
                    value={emailAddress.toLowerCase()}
                    placeholder="Email Address"
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
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.button} onPress={handlePressSignIn}>
                        <Text style={styles.signInText}>{status.length > 0 ? status : 'Sign in'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.signup}>Not a user? Please
                        <Text style={styles.signupLink} onPress={() => { props.navigation.navigate('Sign Up') }}> Sign up </Text>
                    </Text>
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
    signInTitle: {
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
    signup: {
        color: "#000",
        paddingTop: 10,
        textAlign: "center"
    },
    signInText: {
        color: "#fff",
        textAlign: "center"
    },
    signupLink: {
        color: "#FA6E3B"
    }
});
