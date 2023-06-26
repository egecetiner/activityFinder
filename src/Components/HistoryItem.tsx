import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { getIconSource, capitalizeFirstLetter } from "../Utils/UsefulFunctions"
import React from "react"
import moment from "moment"

const HistoryItem = ({ item, navigation }: { item: any }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Chat", {
                    activity: item.activity,
                    response: item.response
                })
            }}
            style={styles.itemContainer}>
            <Image
                style={styles.typeIcon}
                source={getIconSource(item.type)}
            />
            <View style={styles.activityTextContainer}>
                <View style={styles.textView}>
                    <Text style={styles.activityTitle}>
                        {item.activity}
                    </Text>
                    <Text style={styles.activitySubtitle}>
                        {capitalizeFirstLetter(item.type)} • {moment(item.time).calendar({
                            sameDay: '[Today] HH.mm',
                            lastDay: '[Yesterday] HH.mm',
                            sameElse: 'DD/MM/YYYY'
                        })}
                    </Text>
                </View>
                <Image
                    style={styles.arrowIcon}
                    source={require("../Assets/Arrow.png")}
                />
            </View>
        </TouchableOpacity>
    )
}

export default HistoryItem

export const styles = StyleSheet.create({
    arrowIcon: {
        width: 7,
        height: 12,
    },
    typeIcon: {
        width: 40,
        height: 28,
        alignSelf: "flex-start",
        top: 5,
        marginRight: 12
    },
    itemContainer: {
        backgroundColor: "rgba(250, 250, 253, 1)",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.15)",
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 18
    },
    activityTitle: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        color: "black"
    },
    activityTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1
    },
    activitySubtitle: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 18,
        color: "rgba(113, 113, 113, 1)",
        marginTop: 4
    },
    textView: {
        maxWidth: 250
    }
});