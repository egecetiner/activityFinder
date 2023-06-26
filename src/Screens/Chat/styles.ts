import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backIcon: {
        width: 10.6,
        height: 18
    },
    profileIcon: {
        width: 24,
        height: 24,
        marginLeft: 6,
        marginRight: 4
    },
    answerContainer: {
        flex: 1,
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 0.5,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderRadius: 20,
        borderBottomLeftRadius: 5,
    },
    text: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: 14.5,
        lineHeight: 20,
        color: "black"
    },
    answer: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginRight: 32,
    },
    question: {
        alignSelf: "flex-end",
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 0.5,
        backgroundColor: "rgba(250, 250, 253, 1)",
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderRadius: 20,
        borderBottomRightRadius: 5
    },
    content: {
        backgroundColor: "#ffffff",
        height: "100%",
        paddingTop: 24
    },
    backButton: {
        marginRight: 14
    },
    backContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});