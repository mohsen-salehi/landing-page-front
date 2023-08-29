import httpProvider from "@/provider/httpProvider";

export const appendBonus = async (token , dispatch) => {
    const headers  = httpProvider.setTokenHeader(token)
    const response = await httpProvider.post("bonus" , {} , headers)
    return response.data
}
