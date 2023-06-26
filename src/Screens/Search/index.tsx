import React, { useState } from "react"
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

const Search = ({navigation}) => {
    const activities = require('../../Utils/Activities.json');
    const [searchText, setSearchText] = useState<any>("");
    const [filteredData, setFilteredData] = useState<any>(activities);  
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                if (searchText === "") {
                    setFocus(false)
                }
            }}>
                <TopView text={"Search"}>
                    <SearchBar
                        initialData={activities}
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
                contentContainerStyle={{ paddingBottom: 105 }}
                style={styles.flatList}
                data={filteredData}
                renderItem={({ item }) => <SearchListItem
                    item={item}
                    navigation={navigation}
                />}
            />
        </SafeAreaView>
    );
}

export default Search;
