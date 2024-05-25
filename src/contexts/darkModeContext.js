import { createContext, useContext, useEffect, useState } from "react";


export const DarkModeData = createContext(false);
export const DarkModeDispatch = createContext(null);

export function useDarkModeData() {
    return useContext(DarkModeData);
}

export function useDarkModeDispatch() {
    return useContext(DarkModeDispatch);
}

let themes = {
    dark: {
        "--theme-background": "black",
        "--theme-text-color": "white"
    },
    light: {
        "--theme-background": "white",
        "--theme-text-color": "black"
    }
}

export function DarkModeProvider({children}) {

    let [darkModeValue, setDarkModeValue] = useState(false);

    useEffect(() => {
        // Find the body element
        let bodyElement = document.querySelector("body");
        // Find the styles on the body element
        
        // bodyElement.style.setProperty("--theme-background", colourToApply);

        let modeName = darkModeValue ? "dark" : "light";
        Object.keys(themes[modeName]).forEach(modeKey => {
                bodyElement.style.setProperty(modeKey, themes[modeName][modeKey]);
        // bodyElement.style.setProperty("--theme-text-color");
        // Modify the variable on the styles of the body element
        }) 
    }, [darkModeValue])

    return(
        <DarkModeData.Provider value={darkModeValue}>
            <DarkModeDispatch.Provider value={setDarkModeValue}>
                {children}
            </DarkModeDispatch.Provider>
        </DarkModeData.Provider>
    )
}