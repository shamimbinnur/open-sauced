import { createContext, useContext, useState  } from "react";


const GridContext = createContext(null);


export const useGridContext = () => {
    return useContext(GridContext)
}

export const ContextProvider = ({ children }) => {
    
    const [isGrid, setIsGrid] = useState(true);

    return (
        <GridContext.Provider value={{ isGrid, setIsGrid }}>
            {children}
        </GridContext.Provider>
    )
}