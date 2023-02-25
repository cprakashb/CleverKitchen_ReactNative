import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Header from './Header';

const Query = ({ route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.bodyContainer}>
                <Text style={styles.queryTitle}>We will get back to you for your Query</Text>
                <Text style={styles.input}>{route.params.emailQuery}</Text>
                <Text style={styles.queryInput}>{route.params.messageQuery}</Text>

            </View>
        </SafeAreaView >
    );
}

export default Query;
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
    queryTitle: {

        textAlign: "center",
        fontWeight: "600",
        marginBottom: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        borderLeftColor: "#FA6E3B",
        borderLeftWidth: 5,
    },
    queryInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#f1f1f1',
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

