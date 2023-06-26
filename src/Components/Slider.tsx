import { StyleSheet, Text, View } from "react-native"
import { Slider } from "@miblanchard/react-native-slider"

export const customSlider = (title: string, fixedNumber: number, value: number, setValue: any, maxValue?: number) => {
    return (
        <View style={styles.sliderContainer}>
            <Text style={styles.sliderTitle}>{title}</Text>
            <Slider
                thumbStyle={styles.sliderThumb}
                maximumValue={maxValue}
                minimumTrackTintColor="rgba(0, 152, 253, 1)"
                thumbTintColor="rgba(255, 255, 255, 1)"
                renderAboveThumbComponent={() => <Text style={styles.aboveThumb}>{value}</Text>}
                value={value}
                onValueChange={(value: any) => setValue(value[0].toFixed(fixedNumber))}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        marginHorizontal: 16,
        marginTop: 24
    },
    sliderTitle: {
        marginBottom: 18,
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 16
    },
    sliderThumb: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.00,
        elevation: 1
    },
    aboveThumb: {
        position: "absolute",
        bottom: -5,
        right: -10
    },
})