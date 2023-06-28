import React, { useContext, useState } from "react"
import {
    FlatList,
    Keyboard,
    SafeAreaView,
    TouchableWithoutFeedback
} from 'react-native';

import { styles } from "./styles";
import SearchBar from "../../Components/SearchBar";
import SearchListItem from "../../Components/SearchListItem";
import TopView from "../../Components/TopView";
import { AppContext } from "../../Context/AppContext";

const Search = ({ navigation }) => {
    const { searchTextSearch,
        setSearchTextSearch,
        filteredDataSearch,
        setFilteredDataSearch,
        focusSearch,
        setFocusSearch
    } = useContext(AppContext);
    const activities = require('../../Utils/Activities.json');

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                if (searchTextSearch === "") {
                    setFocusSearch(false)
                }
            }}>
                <TopView text={"Search"}>
                    <SearchBar
                        initialData={activities}
                        searchText={searchTextSearch}
                        setSearchText={setSearchTextSearch}
                        setFilteredData={setFilteredDataSearch}
                        focus={focusSearch}
                        setFocus={setFocusSearch}
                    />
                </TopView>
            </TouchableWithoutFeedback>
            <FlatList
                onScroll={() => {
                    Keyboard.dismiss()
                    if (searchTextSearch === "") {
                        setFocusSearch(false)
                    }
                }}
                contentContainerStyle={{ paddingBottom: 105 }}
                style={styles.flatList}
                data={filteredDataSearch}
                renderItem={({ item }) => <SearchListItem
                    item={item}
                    navigation={navigation}
                />}
            />
        </SafeAreaView>
    );
}

export default Search;
