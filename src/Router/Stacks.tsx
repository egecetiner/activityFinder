import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Chat from "../Screens/Chat";
import Search from "../Screens/Search";
import History from "../Screens/History";

const Stack = createStackNavigator();

 export const HomeStack = () => {
  return (
      <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          <Stack.Screen
              name="Home"
              component={Home}
          />
           <Stack.Screen
              name="Chat"
              component={Chat}
          />
      </Stack.Navigator>
  )
}

export const SearchStack = () => {
  return (
      <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          <Stack.Screen
              name="Search"
              component={Search}
          />
           <Stack.Screen
              name="Chat"
              component={Chat}
          />
      </Stack.Navigator>
  )
}

export const HistoryStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="History"
                component={History}
            />
             <Stack.Screen
                name="Chat"
                component={Chat}
            />
        </Stack.Navigator>
    )
  }