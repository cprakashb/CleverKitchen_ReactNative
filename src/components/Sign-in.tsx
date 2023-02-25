import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, View, Alert } from 'react-native';
import commonStyles from "../styles/common";

export default function SignIn({ navigation }) {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={styles.bodyContainer}>
                <Text style={styles.signInTitle}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmailAddress}
                    value={emailAddress}
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
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (emailAddress.toLowerCase() === "admin" && password.toLowerCase() === "admin") {
                            navigation.reset({ index:0, routes:[{name:'Tabs'}]})
                        } else {
                            Alert.alert("Authentication Error", `You are not authenticated to login`)
                        }
                    }} disabled={emailAddress && password ? false : true}>
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={styles.signup}>Not a user? Please
                        <Text style={styles.signupLink} onPress={() => { navigation.navigate('Sign Up') }}> Sign up </Text>
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
