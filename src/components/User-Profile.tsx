import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Alert
} from 'react-native';
import Header from './Header';

export default function Profile({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.bodyContainer}>
                <View style={styles.avatarContainer} >
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                </View>
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text}>Chandra Prakash</Text>
                    </View>
                </View >
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text}>chandraprakashb15@gmail.com</Text>
                    </View>
                </View >
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text} onPress={() => {

                            Alert.alert("Please Confirm", `Are you sure?`, [
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        navigation.reset({
                                            index: 0,
                                            routes: [{ name: "Landing Page" }]
                                        })
                                    }
                                },
                                {
                                    text: "No",
                                    onPress: () => { }
                                }
                            ])

                        }}>Logout</Text>
                    </View>
                </View >
            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    bodyContainer: {
        backgroundColor: '#fff',
        justifyContent: "center",
        height: "100%"
    },
    avatarContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:"center",
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 120,
        borderWidth: 4,
        borderColor: "white",
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
    text: {
        color: "#fff",
        textAlign: "center"
    }
});
