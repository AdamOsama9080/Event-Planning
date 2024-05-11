import { createContext, useMemo, useState } from "react";
export const SearchContext=createContext();
const SearchContextProvider = ({children}) => {
    const [eventToSearch,setEventToSearch]=useState({type:"",venue:"",date:""});
    const contextValues=useMemo(()=>({eventToSearch,setEventToSearch})
    ,[eventToSearch,setEventToSearch]);
    return (
        <SearchContext.Provider value={contextValues}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;