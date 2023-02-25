import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView } from 'react-native';

export default function Team({ navigation }) {
    const teamDetails = [{
        id: 2000535950,
        name: "Chandra Prakash",
        imageUrl: require("../../assets/profile/chandra.png")
    },
    {
        id: 200534345,
        name: "Sethuram Vijaya Kumar",
        imageUrl: require("../../assets/profile/sethu.png")

    },
    {
        id: 200523861,
        name: "Palika Malemane Sathish",
        imageUrl: require("../../assets/profile/palika.png")

    },
    {
        id: 200547300,
        name: "Reeja Mary Mathew",
        imageUrl: require("../../assets/profile/reeja.png")

    },
    {
        id: 200537751,
        name: "Jeeva Mahadevan",
        imageUrl: require("../../assets/profile/jeeva.png")

    }]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
            <View style={styles.bodyContainer}>

                {
                    teamDetails.map(team => {
                        return (
                            <View style={styles.teamCard} key={team.id}>
                                <Image
                                    source={team.imageUrl}
                                    resizeMode="contain"
                                    style={styles.image4}
                                ></Image>
                                <View style={styles.textContainer}>
                                    <Text style={styles.nameText}>{team.id}</Text>
                                    <Text style={styles.nameText}>{team.name}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            </ScrollView>
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
        justifyContent: "center",
        height: "100%",
        padding:10,
    },
    teamCard: {
        width: "100%",
        height: 120,
        backgroundColor: "#FFF",
        marginTop: 10,
        marginBottom: 10,
        borderBottomColor:"#FA6E3B",
        borderBottomWidth: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        flexDirection: "row",
        padding: 25
    },
    textContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image4: {
        width: 80,
        height: 80
    },
    nameText: {
        color: "#000",
        fontWeight:"600"
    }
});
