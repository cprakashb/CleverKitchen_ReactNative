import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Header from './Header';
import commonStyles from "../styles/common";

export default function RecipeManagement({ navigation }) {

    return (
        <SafeAreaView style={commonStyles.container}>
            <Header />
            <View style={styles.bodyContainer}>
                <View style={styles.titleContainer} >
                    <Text style={styles.titleText} >Recipe Management</Text>
                </View>
                <View style={styles.textBodyContainer} >
                    <Text style={styles.bodyText}>When you're out of cooking inspiration, Clever Kitchen will come to your aid with our extensive collection of recipes.
                        We aggregate numerous recipes from different in-house cooks/users
                        On this platform, users can share their recipes with each other and react to other's.

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