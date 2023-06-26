import { ActivityIndicator, Image } from "react-native";
import { ActivityItem } from "./Constants";
import { API_KEY } from "@env"
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getIconSource = (type: string) => {
    let iconSource;
    switch (type) {
        case "busywork":
            iconSource = require("../Assets/Busywork.png")
            break;
        case "recreational":
            iconSource = require("../Assets/Recreational.png")
            break;
        case "education":
            iconSource = require("../Assets/Education.png")
            break;
        case "social":
            iconSource = require("../Assets/Social.png")
            break;
        case "relaxation":
            iconSource = require("../Assets/Relaxation.png")
            break;
        case "cooking":
            iconSource = require("../Assets/Cooking.png")
            break;
        case "charity":
            iconSource = require("../Assets/Charity.png")
            break;
        case "music":
            iconSource = require("../Assets/Music.png")
            break;
        case "diy":
            iconSource = require("../Assets/Diy.png")
            break;
        case "no-activity":
            iconSource = require("../Assets/NoActivity.png")
            break;
    }
    return iconSource;
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const fetchChatAnswer = async (question, setLoading, setResponse) => {
    setLoading(true)
    const url = 'https://api.openai.com/v1/completions';
    const data = {
        model: 'text-davinci-003',
        prompt: question,
        max_tokens: 4000
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        setResponse(responseData.choices[0].text.trim());
    } catch (error) {
        setResponse("An error occured")
    }
    setLoading(false)
};

export const getRandomDecimalVal = () =>{
    return Math.min(1, 1.0000000000000003 * Math.random()).toFixed(1)
}

export const getRandomValwithMax = (max:number) =>{
    return Math.floor(Math.random() * max)
}

export const getActivityTitle = (activity: ActivityItem, loading: boolean) => {
    if (activity?.error) {
        return "No activity found"
    }
    if(activity?.activity){
        return activity.activity
    }
    if (loading) {
        return "Loading...."
    }

    return "Stop Being Bored!"
}

export const getActivitySubtitle = (activity: ActivityItem, loading: boolean) => {
    if (activity?.error) {
        return "Please change parameters and retry!"
    }
    if(activity?.activity){
        return `${capitalizeFirstLetter(activity.type)} • ${activity.participants} Person • ${activity.price > 0.4 ? "Expensive" : "Cheap"}`
    }
    if (loading) {
        return "Searching for activities"
    }

    return "Configure parameters to find activities."
}

export const getActivityImage = (loading: boolean, activity: ActivityItem) => {
    if (activity?.error) {
        return (
            <Image
                style={{
                    width: 40,
                    height: 28,
                    marginRight: 12,
                    resizeMode: "contain"
                }}
                source={require("../Assets/NoActivity.png")}
            />
        )
    }
    if (activity?.activity) {
        return (
            <Image
                style={{
                    width: 40,
                    height: 28,
                    marginRight: 12,
                    resizeMode: "contain"
                }}
                source={getIconSource(activity.type)}
            />
        )
    }
    if (loading) {
        return (
            <ActivityIndicator
                style={{
                    width: 40,
                    height: 28,
                    marginRight: 12,
                }}
            />
        )
    }

    return (
        <Image
            style={{
                width: 40,
                height: 28,
                marginRight: 12,
                resizeMode: "contain"
            }}
            source={require("../Assets/Search.png")}
        />
    )
}

export const storeLocalData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };
 
export const getLocalData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  export const getAllLocalKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }
    return keys
  }

  export const getLocalMultiple = async (keyArray) => {
    let values
    try {
      values = await AsyncStorage.multiGet(keyArray)
    } catch(e) {
      // read error
    }
    return values
  }

  export const clearLocalAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }