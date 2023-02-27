import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, View, Alert } from 'react-native';
import Header from './Header';

const Contact = (props: { navigation: any }) => {
    const [emailAddress, setEmailAddress] = useState("");
    const [query, setQuery] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.bodyContainer}>
                <Text style={styles.contactUsTitle}>Contact us</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmailAddress}
                    value={emailAddress}
                    placeholder="Email Address"
                    textContentType="emailAddress"
                />
                <TextInput
                    style={styles.queryInput}
                    onChangeText={setQuery}
                    value={query}
                    placeholder="Please describe your query"
                    textContentType="name"
                    multiline
                    numberOfLines={5}
                    maxLength={500}
                />

                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (emailAddress.length > 0 && query.length > 0) {
                            props.navigation.navigate("Query", { emailQuery: emailAddress, messageQuery: query })
                        } else {
                            Alert.alert("Oops!!", "Please fill in the required details")
                        }
                    }}
                    >
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View >
            </View>
        </SafeAreaView >
    );
}

export default Contact;

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
    contactUsTitle: {
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
    queryInput: {
        height: 100,
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
    submitText: {
        color: "#fff",
        textAlign: "center"
    }
});

