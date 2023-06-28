import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'
import { Keyboard } from 'react-native';

interface AppContext {
    isKeyboardVisible: boolean
    setKeyboardVisible: Dispatch<SetStateAction<boolean>>
    searchTextSearch: string
    setSearchTextSearch: Dispatch<SetStateAction<string>>
    filteredDataSearch: []
    setFilteredDataSearch: Dispatch<SetStateAction<any>>
    focusSearch: boolean
    setFocusSearch: Dispatch<SetStateAction<boolean>>
    searchTextHistory: string
    setSearchTextHistory: Dispatch<SetStateAction<string>>
    filteredDataHistory: []
    setFilteredDataHistory: Dispatch<SetStateAction<any>>
    focusHistory: boolean
    setFocusHistory: Dispatch<SetStateAction<boolean>>
    modalVisibleHistory: boolean
    setModalVisibleHistory: Dispatch<SetStateAction<boolean>>
    localDataHistory: any
    setLocalDataHistory: Dispatch<SetStateAction<any>>
    responseChat: string
    setResponseChat: Dispatch<SetStateAction<string>>
    loadingChat: boolean
    setLoadingChat: Dispatch<SetStateAction<boolean>>
    typeHome: string
    setTypeHome: Dispatch<SetStateAction<string>>
    loadingHome: boolean
    setLoadingHome: Dispatch<SetStateAction<boolean>>
    priceHome: number
    setPriceHome: Dispatch<SetStateAction<number>>
    participantsHome: number
    setParticipantsHome: Dispatch<SetStateAction<number>>
    accesibilityHome: number
    setAccesibilityHome: Dispatch<SetStateAction<number>>
    activityHome: any
    setActivityHome: Dispatch<SetStateAction<any>>

}

export const AppContext = createContext<AppContext>({} as AppContext);

export const AppContextProvider = (props: any) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    const activities = require('../Utils/Activities.json');
    const [searchTextSearch, setSearchTextSearch] = useState<string>("");
    const [filteredDataSearch, setFilteredDataSearch] = useState<any>(activities);  
    const [focusSearch, setFocusSearch] = useState<boolean>(false);

    const [modalVisibleHistory, setModalVisibleHistory] = useState(false);
    const [searchTextHistory, setSearchTextHistory] = useState<any>("");
    const [filteredDataHistory, setFilteredDataHistory] = useState<any>();
    const [focusHistory, setFocusHistory] = useState<boolean>(false);
    const [localDataHistory, setLocalDataHistory] = useState<any>([]);

    const [responseChat, setResponseChat] = useState("");
    const [loadingChat, setLoadingChat] = useState(false);

    const [typeHome, setTypeHome] = useState<string>("All");
    const [loadingHome, setLoadingHome] = useState(false);
    const [priceHome, setPriceHome] = useState<number>(0);
    const [participantsHome, setParticipantsHome] = useState<number>(0);
    const [accesibilityHome, setAccesibilityHome] = useState<number>(0);
    const [activityHome, setActivityHome] = useState<any>(null);

    return (
        <AppContext.Provider
            value={{
                isKeyboardVisible,
                setKeyboardVisible,
                searchTextSearch,
                setSearchTextSearch,
                filteredDataSearch,
                setFilteredDataSearch,
                focusSearch,
                setFocusSearch,
                modalVisibleHistory,
                setModalVisibleHistory,
                searchTextHistory,
                setSearchTextHistory,
                filteredDataHistory,
                setFilteredDataHistory,
                focusHistory,
                setFocusHistory,
                localDataHistory,
                setLocalDataHistory,
                responseChat,
                setResponseChat,
                loadingChat,
                setLoadingChat,
                typeHome,
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
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}