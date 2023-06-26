import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"

const TopView = (props) => {
    if (props.backButton) {
        return (
            <View style={styles.topView}>
                <View style={styles.textContainer}>
                    <View style={styles.backContainer}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.goBack() }}
                            style={styles.backButton}>
                            <Image
                                style={styles.backIcon}
                                source={require("../Assets/Back.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>{props.text}</Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={props.image}
                    />
                </View>
                {props.children}
            </View>
        )
    }
    return (
        <View style={styles.topView}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
                {
                    props.image ? <Image
                        style={styles.image}
                        source={props.image}
                    /> : null
                }
                {
                    props.onPressRight ?
                        <TouchableOpacity
                            onPress={props.onPressRight}>
                            <Image
                                style={styles.rightButtonImage}
                                source={props.buttonImage}
                            />
                        </TouchableOpacity> : null
                }
            </View>
            {props.children}
        </View>
    )
}

export default TopView

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginTop: 8,
        alignItems: "center"
    },
    text: {
        color: "black",
        fontWeight: "700",
        fontFamily: "Poppins",
        fontSize: 24,
        lineHeight: 36,
    },
    image: {
        borderRadius: 50,
        width: 32,
        height: 32,
    },
    topView: {
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderColor: "rgba(0, 0, 0, 0.15)"
    },
    backButton: {
        marginRight: 14
    },
    backContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    backIcon: {
        width: 10.6,
        height: 18
    },
    rightButtonImage: {
        width: 24,
        height: 24
    }
});