import React, { useCallback, useState } from "react"
import { FlatList, Keyboard, Modal, SafeAreaView, TouchableWithoutFeedback, View, Text, Image, TouchableOpacity } from "react-native"
import SearchBar from "../../Components/SearchBar";
import TopView from "../../Components/TopView";
import HistoryItem from "../../Components/HistoryItem";
import { clearLocalAll, getAllLocalKeys, getLocalData } from "../../Utils/UsefulFunctions";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";

const History = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState<any>("");
    const [filteredData, setFilteredData] = useState<any>();
    const [focus, setFocus] = useState<boolean>(false);
    const [localData, setLocalData] = useState<any>([]);

    useFocusEffect(
        useCallback(() => {
            fetchAllLocalData()
        }, [])
    )

    const fetchAllLocalData = async () => {
        const allData = []
        getAllLocalKeys().then(async (keys) => {
            keys.forEach(async (key) => {
                getLocalData(key).then((data) => {
                    allData.push(data)
                })
            })
        }).finally(() => {
            setLocalData(allData)
        })
    }

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                if (searchText === "") {
                    setFocus(false)
                }
            }}>
                <TopView
                    text={"History"}
                    buttonImage={require("../../Assets/Trash.png")}
                    onPressRight={
                        // clearLocalAll
                        () => setModalVisible(true)
                    }
                >
                    <SearchBar
                        initialData={localData}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        setFilteredData={setFilteredData}
                        focus={focus}
                        setFocus={setFocus}
                    />
                </TopView>
            </TouchableWithoutFeedback>
            <FlatList
                onScroll={() => {
                    Keyboard.dismiss()
                    if (searchText === "") {
                        setFocus(false)
                    }
                }}
                contentContainerStyle={styles.flatlistContent}
                style={styles.flatList}
                data={filteredData ?? localData}
                renderItem={({ item }) => <HistoryItem
                    item={item}
                    navigation={navigation}
                />}
            />
            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.trashIcon}
                            source={require("../../Assets/Trash.png")}
                        />
                        <Text style={styles.modalTitle}>Delete history</Text>
                        <Text style={styles.modalSubtitle}>
                            Are you sure to remove all history items, this action is irreversible!
                        </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.cancelButtonText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={async () => {
                                    await clearLocalAll()
                                    await fetchAllLocalData()
                                    setModalVisible(false)
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
        </SafeAreaView>
    )
}

export default History

