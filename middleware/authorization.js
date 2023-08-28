import {useContext} from "react";
import {StoreContext} from "@/store";
import {authenticationAction} from "@/context/actions/auth/authenticationAction";

function Authorization({children}) {

    const {tokenState , tokenDispatch } = useContext(StoreContext)
    const token = tokenState.token
    authenticationAction(token)
    return children
}

export default Authorization;