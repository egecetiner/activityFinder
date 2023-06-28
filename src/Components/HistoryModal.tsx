import React, { useContext } from "react";
import { Modal, StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { AppContext } from "../Context/AppContext";
import { clearLocalAll } from "../Utils/UsefulFunctions";

const HistoryModal = (props) => {
    const {
        setFilteredDataHistory,
        modalVisibleHistory,
        setModalVisibleHistory,
    } = useContext(AppContext);

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisibleHistory}
            onRequestClose={() => {
                setModalVisibleHistory(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image
                        style={styles.trashIcon}
                        source={require("../Assets/Trash.png")}
                    />
                    <Text style={styles.modalTitle}>Delete history</Text>
                    <Text style={styles.modalSubtitle}>
                        Are you sure to remove all history items, this action is irreversible!
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalVisibleHistory(false)}
                        >
                            <Text style={styles.cancelButtonText}>
                                Cancel
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={async () => {
                                clearLocalAll().then(async () => {
                                    await props.fetchData()
                                }).finally(() => {
                                    setModalVisibleHistory(false)
                                    setFilteredDataHistory([])
                                })
                            }}
                            style={styles.okButton}
                        >
                            <Text style={styles.okButtonText}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default HistoryModal

const styles = StyleSheet.create({
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
        marginTop: 12,
        color: "black"
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
        fontWeight: "600",
        color: "black"
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