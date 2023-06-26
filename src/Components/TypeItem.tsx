import { Text, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native";

const TypeItem = (props) => {
    return (
        <TouchableOpacity
            style={[
                styles.itemView,
                { backgroundColor: props.type === props.item ? "black" : "white" }
            ]}
            onPress={() => {
                props.setType(props.item)
            }}>
            <Text
                style={[
                    styles.itemText,
                    { color: props.type === props.item ? "white" : "black" }
                ]}>
                {props.item}
            </Text>
        </TouchableOpacity>
    )
}

export default TypeItem

const styles = StyleSheet.create({
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
    }
});