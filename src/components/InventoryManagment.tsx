import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Header from './Header';
import commonStyles from "../styles/common";

export default function InventoryManagement({ navigation }) {

    return (
        <SafeAreaView style={commonStyles.container}>
            <Header />
            <View style={styles.bodyContainer}>
                <View style={styles.titleContainer} >
                    <Text style={styles.titleText} >Inventory Management</Text>
                </View>
                <View style={styles.textBodyContainer} >
                    <Text style={styles.bodyText}>Clever Kitchen has integrated inventory management where you will be able to manage all the items that are available in your kitchen.
                        Our application helps you to find what is in your kitchen and it also has a mechanism to notify you when something is going to get completed.
                        You won't need to recall what is in your kitchen the next time because we'll have it archived for you...
                    </Text>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    bodyContainer: {
        backgroundColor: '#fff',
        height: "100%"
    },
    titleContainer: {
        flex: 2,
        fontWeight: "600",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    titleText: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 35,
        fontWeight: "600",
        textAlign: "center"
    },
    textBodyContainer: {
        flex: 3,
        fontWeight: "600",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row"
    },
    bodyText: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20
    }
});
