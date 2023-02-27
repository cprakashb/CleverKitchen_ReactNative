import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Alert
} from 'react-native';
import { useAppData } from '../providers/AppState';
import Header from './Header';
import auth from '@react-native-firebase/auth';


export default function Profile(props: { navigation: any }): JSX.Element {
    const { activeUser } = useAppData();

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.bodyContainer}>
                <View style={styles.avatarContainer} >
                    <Image style={styles.avatar} source={{ uri: activeUser.avatarUrl }} />
                </View>
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text}>{`${activeUser.firstName} ${activeUser.lastName}`}</Text>
                    </View>
                </View >
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text}>{activeUser.emailId}</Text>
                    </View>
                </View >
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text} onPress={() => {

                            Alert.alert("Please Confirm", `Are you sure?`, [
                                {
                                    text: "Yes",
                                    onPress: async () => {
                                        await auth()
                                            .signOut()
                                            .then(() => {
                                                console.log('User signed out!')
                                                Alert.alert('Successfully logged out!!');
                                                props.navigation.reset({
                                                    index: 0,
                                                    routes: [{ name: "Landing Page" }]
                                                })
                                            });

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
    avatarContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
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
