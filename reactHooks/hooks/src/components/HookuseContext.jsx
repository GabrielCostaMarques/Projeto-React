import { createContext } from "react";

export const SomeContext = createContext();

const HookuseContext = ({ children }) => {
    const contextValue = "testing text";

    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>
    );
};

export default HookuseContext;
