import { View, Image, Text, TouchableOpacity } from "react-native"
import { getIconSource, capitalizeFirstLetter } from "../Utils/UsefulFunctions"
import { ActivityItem } from "../Utils/Constants"
import React from "react"
import { StyleSheet } from "react-native";

const SearchListItem = ({ item, navigation }: { item: ActivityItem }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Chat", {
                    activity: item.activity,
                    type: item.type
                })
            }}
            style={styles.itemContainer}>
            <Image
                style={styles.typeIcon}
                source={getIconSource(item.type)}
            />
            <View style={styles.activityTextContainer}>
                <View style={{ maxWidth: 280 }}>
                    <Text style={styles.activityTitle}>
                        {item.activity}
                    </Text>
                    <Text style={styles.activitySubtitle}>
                        {capitalizeFirstLetter(item.type)} • {item.participants} Person • {item.price > 0.4 ? "Expensive" : "Cheap"}
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

export default SearchListItem

export const styles = StyleSheet.create({
    arrowIcon: {
        width: 7,
        height: 12,
        marginRight: 20,
    },
    typeIcon: {
        width: 40,
        height: 28,
        alignSelf: "flex-start",
        top: 16,
        marginRight: 12
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    activityTitle: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20
    },
    activityTextContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.15)",
        paddingVertical: 12,
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
    }
});