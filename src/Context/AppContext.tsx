import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'
import { Keyboard } from 'react-native';

interface AppContext {
    isKeyboardVisible: boolean
    setKeyboardVisible: Dispatch<SetStateAction<boolean>>
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

    return (
        <AppContext.Provider
            value={{
                isKeyboardVisible,
                setKeyboardVisible
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}