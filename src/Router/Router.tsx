import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { historyOptions, homeOptions, searchOptions, tabBarOptions } from "./ScreenOptions";
import { HistoryStack, HomeStack, SearchStack } from "./Stacks";

const Router = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen name="HomeStack" component={HomeStack}
          options={homeOptions}
        />
        <Tab.Screen name="SearchStack" component={SearchStack}
          options={searchOptions}
        />
        <Tab.Screen name="HistoryStack" component={HistoryStack}
          options={historyOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router

