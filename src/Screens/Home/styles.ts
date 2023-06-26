import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boredContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginTop: 8
    },
    boredText: {
        fontWeight: "700",
        fontFamily: "Poppins",
        fontSize: 24,
        lineHeight: 36,
    },
    boredImage: {
        borderRadius: 50,
        width: 32,
        height: 32,
    },
    itemView: {
        borderRadius: 20,
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 16,
        paddingVertical: 5
    },
    itemText: {
        lineHeight: 22.5,
        fontSize: 15,
        fontWeight: "500",
    },
    searchImage: {
        width: 40,
        height: 28,
        marginRight: 12,
        resizeMode: "contain"
    },
    activityContainer: {
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 32,
        paddingVertical: 18,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    searchImageContainer: {
        alignSelf: "flex-start",
        paddingTop: 3
    },
    activityTitle: {
        fontSize: 16,
        fontFamily: "Poppins",
        fontWeight: "500",
        maxWidth: 280
    },
    activitySubtitle: {
        marginTop: 2,
        fontSize: 13,
        fontFamily: "Poppins",
        fontWeight: "400",
        color: "rgba(113, 113, 113, 1)"
    },
    vectorImage: {
        width: 16,
        height: 22,
        marginRight: 8
    },
    topView: {
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderColor: "rgba(0, 0, 0, 0.15)"
    },
    flatList: {
        marginTop: 12,
        marginLeft: 16
    },
    randomButtonContainer: {
        height: 40,
        borderWidth: 1,
        marginHorizontal: 16,
        marginTop: 32,
        paddingVertical: 7.5,
        justifyContent: "center",
        borderRadius: 4,
        flexDirection: "row"
    },
    activityButton: {
        height: 40,
        marginHorizontal: 16,
        marginTop: 8,
        paddingVertical: 8,
        alignItems: "center",
        borderRadius: 4
    },
    randomButtonText: {
        fontSize: 16,
        fontFamily: "Poppins",
        fontWeight: "600"
    },
    activityButtonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins",
        fontWeight: "600"
    },
    activityButtonTextView: {
        justifyContent: "center"
    },
    arrowIcon: {
        width: 7,
        height: 12
    },
    contents: {
        backgroundColor: "#ffffff",
        height: "100%"
    },
    activityTexts: {
        flex: 1,
        paddingRight: 10
    }
});