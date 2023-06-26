import React, { useState } from "react"
import {
    ActivityIndicator,
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { getActivityImage, getActivitySubtitle, getActivityTitle, getIconSource, getRandomDecimalVal, getRandomValwithMax } from "../../Utils/UsefulFunctions";
import { styles } from "./styles";
import { customSlider } from "../../Components/Slider";
import { activityTypes, axiosInstance } from "../../Utils/Constants";
import TypeItem from "../../Components/TypeItem";
import TopView from "../../Components/TopView";
import axios from "axios";

const Home = ({ navigation }) => {
    const [type, setType] = useState<string>("All");
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState<any>(0);
    const [participants, setParticipants] = useState<any>(0);
    const [accesibility, setAccesibility] = useState<any>(0);
    const [activity, setActivity] = useState<any>(null);

    const onPressActivity = () => {
        setLoading(true)
        let query;
        if (type !== "All") {
            query = `/api/activity?type=${type?.toLowerCase()}&price=${price}&accessibility=${accesibility}&participants=${participants}`
        } else {
            query = `/api/activity?price=${price}&accessibility=${accesibility}&participants=${participants}`
        }
        axios.create({ baseURL: "http://www.boredapi.com" }).get(query).then((response) => {
            setActivity(response.data)
        }).finally(() => {
            setLoading(false)
        })
    }

    const onPressRandom = () => {
        setPrice(getRandomDecimalVal())
        setAccesibility(getRandomDecimalVal())
        setParticipants(getRandomValwithMax(4))
        setType(activityTypes[getRandomValwithMax(10)])
    }

    return (
        <SafeAreaView>
            <TopView
                text={"Bored AI"}
                image={require("../../Assets/Preview.jpg")}
            >
                <FlatList
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={activityTypes}
                    renderItem={({ item }) =>
                        <TypeItem
                            item={item}
                            setType={setType}
                            type={type}
                        />
                    }
                />
            </TopView>

            <View style={styles.contents}>
                <TouchableOpacity
                    disabled={!activity?.activity}
                    onPress={() => {
                        navigation.navigate("Chat", {
                            activity: activity.activity,
                            type: activity.type
                        })
                    }}
                    style={styles.activityContainer}>
                    <View style={styles.searchImageContainer}>
                        {getActivityImage(loading, activity)}
                    </View>
                    <View style={styles.activityTexts}>
                        <Text style={styles.activityTitle}>
                            {getActivityTitle(activity, loading)}
                        </Text>
                        <Text style={styles.activitySubtitle}>
                            {getActivitySubtitle(activity, loading)}
                        </Text>
                    </View>
                    {
                        activity?.activity ?
                            <Image
                                style={styles.arrowIcon}
                                source={require("../../Assets/DarkArrow.png")}
                            /> : null
                    }
                </TouchableOpacity>

                {customSlider("Price", 1, price, setPrice)}
                {customSlider("Participants", 0, participants, setParticipants, 3)}
                {customSlider("Accesibility", 1, accesibility, setAccesibility)}

                <TouchableOpacity
                    style={styles.randomButtonContainer}
                    onPress={onPressRandom}
                >
                    <Image
                        style={styles.vectorImage}
                        source={require("../../Assets/Random.png")}
                    />
                    <View style={styles.activityButtonTextView}>
                        <Text style={styles.randomButtonText}>
                            Randomize Values
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onPressActivity}
                    disabled={loading}
                    style={[
                        styles.activityButton,
                        { backgroundColor: loading ? "rgba(153, 154, 156, 1)" : "black" }
                    ]}
                >
                    <View style={{ flexDirection: "row" }}>
                        {loading ? <ActivityIndicator color={"rgba(229, 229, 234, 1)"} style={{ marginRight: 8 }} /> : null}
                        <Text style={styles.activityButtonText}>
                            {loading ? "Finding Activity" : 'Find Activity'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;
