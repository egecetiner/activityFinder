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
    topView: {
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderColor: "rgba(0, 0, 0, 0.15)"
    },
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
    flatList: {
        backgroundColor: "#ffffff",
        height: "100%",
        paddingTop: 7,
        paddingLeft: 16
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