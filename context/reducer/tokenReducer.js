import {requestAction} from "@/context/actions/auth/requestAction";
import {otpAction} from "@/context/actions/auth/otpAction";
import CacheProvider from "@/provider/catchProvider";


export const tokenReducer = async (state, {type, payload}) => {
    switch (type) {
        case "REQUEST" : {
            state.mobile = payload
            const status = await requestAction(payload)
            return state
        }
        case "GET_TOKEN" : {
            const token = await otpAction({state, payload})
            CacheProvider.set("token" , token)
        }
    }
}
