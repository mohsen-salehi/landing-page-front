import httpProvider from "@/provider/httpProvider";

export const wheelGetAction = async (data) => {
    const headers = httpProvider.setTokenHeader(data)
    const res = await httpProvider.get("wheel", headers)
    return res.data
}