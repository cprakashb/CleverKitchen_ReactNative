import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';

export default function Header() {
  
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require("../../assets/header.png")} />
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        zIndex:100
    },
    image: {
        height: 100,
        resizeMode: "center",
    }
});
