import {createContext, useReducer} from "react";
import {tokenReducer} from "@/context/reducer/tokenReducer";
import CacheProvider from "@/provider/catchProvider";
import {wheelReducer} from "@/context/reducer/wheelReducer";


export const StoreContext = createContext([])

const initialState = {
    mobile: [],
    token: CacheProvider.get("token") ? CacheProvider.get("token")?.value : '',
    wheel: [],
}


export const StoreContextProvider = ({children}) => {
    const [tokenState, tokenDispatch] = useReducer(tokenReducer, initialState)
    const [wheelState, wheelDispatch] = useReducer(wheelReducer, initialState)
    const value = {
        tokenState, tokenDispatch,
        wheelState, wheelDispatch
    }
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}