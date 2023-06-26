import { View, Image, TextInput, TouchableOpacity, Keyboard, Text } from "react-native"
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const SearchBar = (props) => {
   
    const { isKeyboardVisible } = useContext(AppContext);
    return (
        <View style={styles.searchBarContainer}>
            <View
                style={[
                    styles.inputContainer,
                    { borderColor: props.focus ? "rgba(35, 31, 32, 1)" : "rgba(153, 154, 156, 1)" }
                ]}
            >
                <Image
                    style={styles.searchIcon}
                    source={props.focus ? require("../Assets/Search.png") : require("../Assets/SearchGray.png")}
                />
                <TextInput
                    onFocus={() => props.setFocus(true)}
                    style={styles.input}
                    onChangeText={(text) => {
                        props.setSearchText(text)
                        props.setFilteredData(props.initialData.filter((item: any) => { return item.activity?.toLowerCase().includes(text.toLowerCase()) }))
                    }}
                    value={props.searchText}
                    placeholder="Search activity"
                />
                {props.searchText === "" ? null :
                    <TouchableOpacity
                        onPress={() => {
                            props.setFocus(false)
                            Keyboard.dismiss()
                            props.setSearchText("")
                            props.setFilteredData(props.initialData)
                        }}>
                        <Image
                            style={styles.deleteIcon}
                            source={require("../Assets/Delete.png")}
                        />
                    </TouchableOpacity>
                }

            </View>
            {
                isKeyboardVisible ?
                    <TouchableOpacity
                        style={styles.cancelContainer}
                        onPress={() => {
                            Keyboard.dismiss()
                            if (props.searchText === "") {
                                props.setFocus(false)
                            }
                        }}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    : null
            }
        </View>
    )
}

export default SearchBar

import { StyleSheet } from "react-native";
import React from "react";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
        alignItems: "center",
        flex: 1
    },
    searchBarContainer: {
        flexDirection: "row",
        height: 34.7,
        marginHorizontal: 16,
        marginTop: 12,
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: "Poppins",
        fontWeight: "400",
        color: "black",
    },
    cancelText: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: 13,
        color: "rgba(113, 113, 113, 1)"
    },
    searchIcon: {
        width: 14,
        height: 14,
        marginRight: 8
    },
    deleteIcon: {
        width: 14,
        height: 14,
        borderRadius: 20
    },
    cancelContainer: {
        marginLeft: 8,
        justifyContent: "center"
    }
});