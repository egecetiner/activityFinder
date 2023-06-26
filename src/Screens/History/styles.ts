import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    flatList: {
        backgroundColor: "#ffffff",
        height: "100%",
        paddingTop: 8
    },
    flatlistContent: {
        paddingBottom: 125
    },
    centeredView: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        paddingTop: 24,
        paddingBottom: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalTitle: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 22,
        marginTop: 12
    },
    modalSubtitle: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 18,
        color: "rgba(113, 113, 113, 1)",
        textAlign: "center",
        marginTop: 4
    },
    trashIcon: {
        width: 44,
        height: 44
    },
    cancelButton: {
        height: 40,
        borderWidth: 1,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        width: 140,
        marginRight: 8
    },
    okButton: {
        height: 40,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "black",
        width: 140
    },
    cancelButtonText: {
        fontSize: 16,
        fontFamily: "Poppins",
        fontWeight: "600"
    },
    okButtonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins",
        fontWeight: "600"
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 22
    }
})