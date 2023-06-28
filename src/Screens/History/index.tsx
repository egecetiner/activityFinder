import React, { useCallback, useContext } from "react"
import { FlatList, Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native"
import SearchBar from "../../Components/SearchBar";
import TopView from "../../Components/TopView";
import HistoryItem from "../../Components/HistoryItem";
import { getAllLocalKeys, getLocalData } from "../../Utils/UsefulFunctions";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";
import { AppContext } from "../../Context/AppContext";
import HistoryModal from "../../Components/HistoryModal";

const History = ({ navigation }) => {
    const { searchTextHistory,
        setSearchTextHistory,
        filteredDataHistory,
        setFilteredDataHistory,
        focusHistory,
        setFocusHistory,
        modalVisibleHistory,
        setModalVisibleHistory,
        localDataHistory,
        setLocalDataHistory
    } = useContext(AppContext);

    useFocusEffect(
        useCallback(() => {
            fetchAllLocalData()
        }, [modalVisibleHistory])
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
            setLocalDataHistory(allData)
        })
    }

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                if (searchTextHistory === "") {
                    setFocusHistory(false)
                }
            }}>
                <TopView
                    text={"History"}
                    buttonImage={require("../../Assets/Trash.png")}
                    onPressRight={
                        () => setModalVisibleHistory(true)
                    }
                >
                    <SearchBar
                        initialData={localDataHistory}
                        searchText={searchTextHistory}
                        setSearchText={setSearchTextHistory}
                        setFilteredData={setFilteredDataHistory}
                        focus={focusHistory}
                        setFocus={setFocusHistory}
                    />
                </TopView>
            </TouchableWithoutFeedback>
            <FlatList
                onScroll={() => {
                    Keyboard.dismiss()
                    if (searchTextHistory === "") {
                        setFocusHistory(false)
                    }
                }}
                contentContainerStyle={styles.flatlistContent}
                style={styles.flatList}
                data={filteredDataHistory ?? localDataHistory}
                renderItem={({ item }) => <HistoryItem
                    item={item}
                    navigation={navigation}
                />}
            />
            <HistoryModal fetchData={fetchAllLocalData} />
        </SafeAreaView>
    )
}

export default History

