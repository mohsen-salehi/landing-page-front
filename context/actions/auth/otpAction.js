
import httpProvider from "@/provider/httpProvider";
import {toast} from "react-toastify";

export const otpAction = async (data) => {
    const mobile = "09332609027"  //data?.state.mobile
    const otp = data?.payload.token
    try{
        const response = await httpProvider.post("auth/verify" , {
            contact :  mobile ,
            token : otp
        })
        return response?.data?.token
    }catch (e){
        toast.error("مشکلی پیش آمده است")
    }
}
