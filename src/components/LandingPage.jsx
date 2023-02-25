import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

export default function LandingPage({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bodyContainer}>
                <View style={styles.titleContainer} >
                    <Text style={styles.titleText} >Clever Kitchen</Text>
                </View>
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={[styles.button, styles.boxShadow]} onPress={() => {
                        navigation.navigate("Sign In")
                    }}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.boxShadow]} onPress={() => {
                        navigation.navigate("Sign Up")
                    }}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View >

            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FA6E3B',
        flex: 1,
    },
    bodyContainer: {
        backgroundColor: '#fff',
        justifyContent: "center",
        height: "100%",
    },
    titleContainer: {
        flex: 2,
        fontWeight: "600",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    titleText: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 45,
        fontWeight: "600",
        textAlign: "center",
        color: "#FA6E3B",
    },
    buttonContainer: {
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: "#FA6E3B",
        padding: 1,
        borderRadius: 10,
        minHeight: 50,
        justifyContent: "center",
        margin: 10
    },
    boxShadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "600"
    }
});
