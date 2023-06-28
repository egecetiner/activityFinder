import React, { useContext } from "react"
import {
    ActivityIndicator,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
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
import { AppContext } from "../../Context/AppContext";

const Home = ({ navigation }) => {
    const { typeHome,
        setTypeHome,
        loadingHome,
        setLoadingHome,
        priceHome,
        setPriceHome,
        participantsHome,
        setParticipantsHome,
        accesibilityHome,
        setAccesibilityHome,
        activityHome,
        setActivityHome
    } = useContext(AppContext);
  

    const onPressActivity = () => {
        setLoadingHome(true)
        let query;
        if (typeHome !== "All") {
            query = `/api/activity?type=${typeHome?.toLowerCase()}&price=${priceHome}&accessibility=${accesibilityHome}&participants=${participantsHome}`
        } else {
            query = `/api/activity?price=${priceHome}&accessibility=${accesibilityHome}&participants=${participantsHome}`
        }
        axiosInstance.get(query).then((response) => {
            setActivityHome(response.data)
        }).finally(() => {
            setLoadingHome(false)
        })
    }

    const onPressRandom = () => {
        setPriceHome(getRandomDecimalVal() as any)
        setAccesibilityHome(getRandomDecimalVal() as any)
        setParticipantsHome(getRandomValwithMax(4))
        setTypeHome(activityTypes[getRandomValwithMax(10)])
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
                            setType={setTypeHome}
                            type={typeHome}
                        />
                    }
                />
            </TopView>

            <ScrollView 
            contentContainerStyle={{paddingBottom: 120}}
            style={styles.contents}
            >
                <TouchableOpacity
                    disabled={!activityHome?.activity}
                    onPress={() => {
                        navigation.navigate("Chat", {
                            activity: activityHome.activity,
                            type: activityHome.type
                        })
                    }}
                    style={styles.activityContainer}>
                    <View style={styles.searchImageContainer}>
                        {getActivityImage(loadingHome, activityHome)}
                    </View>
                    <View style={styles.activityTexts}>
                        <Text style={styles.activityTitle}>
                            {getActivityTitle(activityHome, loadingHome)}
                        </Text>
                        <Text style={styles.activitySubtitle}>
                            {getActivitySubtitle(activityHome, loadingHome)}
                        </Text>
                    </View>
                    {
                        activityHome?.activity ?
                            <Image
                                style={styles.arrowIcon}
                                source={require("../../Assets/DarkArrow.png")}
                            /> : null
                    }
                </TouchableOpacity>

                {customSlider("Price", 1, priceHome, setPriceHome)}
                {customSlider("Participants", 0, participantsHome, setParticipantsHome, 3)}
                {customSlider("Accesibility", 1, accesibilityHome, setAccesibilityHome)}

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
                    disabled={loadingHome}
                    style={[
                        styles.activityButton,
                        { backgroundColor: loadingHome? "rgba(153, 154, 156, 1)" : "black" }
                    ]}
                >
                    <View style={{ flexDirection: "row" }}>
                        {loadingHome ? <ActivityIndicator color={"rgba(229, 229, 234, 1)"} style={{ marginRight: 8 }} /> : null}
                        <Text style={styles.activityButtonText}>
                            {loadingHome ? "Finding Activity" : 'Find Activity'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
