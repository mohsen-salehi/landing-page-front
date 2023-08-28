import httpProvider from "@/provider/httpProvider";


export const authenticationAction = async (userToken) => {
    const headers = httpProvider.setTokenHeader(userToken)
    const response = await httpProvider.get("auth/resend-verification" , headers)

    // console.log(response)
}