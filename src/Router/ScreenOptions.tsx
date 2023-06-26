import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import { Image } from "react-native"

export const tabBarOptions = () => {
    return (
        {
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarInactiveTintColor: 'rgba(153, 154, 156, 1)',
            tabBarActiveTintColor: 'rgba(35, 31, 32, 1)',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: "#FAFAFD",
                borderTopWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.15)"
            }
        }
    )
}

export const homeOptions = ({ route }) => {
    return (
        {
            tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route)
                if (routeName === 'Chat') {
                    return { display: "none" }
                }
                return
            })(route),
            tabBarIcon: ({ color }) => (
                color === "rgba(35, 31, 32, 1)" ?
                    <Image
                        style={{ width: 22, height: 24 }}
                        source={require("../Assets/Home.png")}
                    /> :
                    <Image
                        style={{ width: 22, height: 24 }}
                        source={require("../Assets/HomeGray.png")}
                    />
            ),
        }
    )
}

export const searchOptions = ({ route }) => {
    return (
        {
            tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route)
                if (routeName === 'Chat') {
                    return { display: "none" }
                }
                return
            })(route),
            tabBarIcon: ({ color }) => (
                color === "rgba(35, 31, 32, 1)" ?
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={require("../Assets/Search.png")}
                    /> :
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={require("../Assets/SearchGray.png")}
                    />
            ),
        }
    )
}

export const historyOptions = () => {
    return (
        {
            tabBarIcon: ({ color }) => (
                color === "rgba(35, 31, 32, 1)" ?
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={require("../Assets/HistoryBlack.png")}
                    /> :
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={require("../Assets/History.png")}
                    />
            ),
        }
    )
}