
import httpProvider from "@/provider/httpProvider";
import {toast} from "react-toastify";

export const requestAction = async (data) => {
    try{
        const response = await httpProvider.post("auth/request" , {contact : data} )
        toast.success(response?.messages[0])
        return response.status
    }catch (e){
        toast.error("مشکلی پیش آمده است")
    }
}
