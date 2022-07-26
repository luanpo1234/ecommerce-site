import React, { useState } from "react";

const LanguageContext = React.createContext();

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("de");
 
    return (
        <LanguageContext.Provider value={ { language, setLanguage } }>
            {children}
        </LanguageContext.Provider>
    )
};

export {LanguageContextProvider, LanguageContext};