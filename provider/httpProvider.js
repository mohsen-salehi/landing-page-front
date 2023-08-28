import config from "@/config";

class HttpProvider {
    static baseUrl = config.base_url
    static get = async (url , headers ) => {
        url = HttpProvider.baseUrl + url
        return await fetch(url , {
            headers : {
                ...headers, "Content-Type": "Application/json", "Accept": "Application/json",
            },
            method : "GET"
        })  .then(response => response.json())
            .then(result => result)
    }
    static post = async (url , data ={} , headers = {} ) => {
        url = HttpProvider.baseUrl + url
        return  await fetch(url , {
            headers : {
                ...headers, "Content-Type": "Application/json", "Accept": "Application/json",
            } ,
            method : "POST",
            body : JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => result)
    }

    static setTokenHeader = (token) => {
        return {
            "Authorization": 'Bearer ' + token
        }
    }
}

export default HttpProvider