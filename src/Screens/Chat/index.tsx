import { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import { fetchChatAnswer, storeLocalData } from "../../Utils/UsefulFunctions";
import { styles } from "./styles";
import React from "react";
import TopView from "../../Components/TopView";
import { AppContext } from "../../Context/AppContext";

const Chat = ({ navigation, route }) => {

    const {responseChat, setResponseChat, loadingChat, setLoadingChat} = useContext(AppContext);

    useEffect(() => {
        if (!route.params.response) {
            fetchChatAnswer(question, setLoadingChat, setResponseChat)
        }
    }, []);

    useEffect(() => {
        if (!route.params.response) {
            storeLocalData(route.params.activity?.toLowerCase(), {activity: route.params.activity, response: responseChat, time: Date.now(), type: route.params.type})
        }
    }, [responseChat]);

    const question = `I want to ${route.params.activity?.toLowerCase()}`

    return (
        <SafeAreaView>
            <TopView
                image={require("../../Assets/Preview.jpg")}
                text={"Bored AI"}
                backButton={true}
                navigation={navigation}
            />
            <ScrollView style={styles.content} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
                <View style={styles.question}>
                    <Text style={styles.text}>{question}</Text>
                </View>
                <View style={styles.answer}>
                    <Image
                        style={styles.profileIcon}
                        source={require("../../Assets/ProfileIcon.jpg")}
                    />
                    <View style={styles.answerContainer}>
                        <Text style={styles.text}>{loadingChat ? "Thinking..." : route.params.response ? route.params.response : responseChat}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chat