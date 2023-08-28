class CacheProvider {
    static set = (key, value, time) => {
        let data = {
            value,
            time
        }
        if (typeof window !== "undefined"){
            localStorage.setItem(key , JSON.stringify(data))
        }
    }

    static get = (key) => {
        let data ;
        if (typeof window !== "undefined"){
             data = JSON.parse(localStorage.getItem(key))
        }
        return data
    }

    static clear = (key) => {
        return localStorage.removeItem(key)
    }


    static clearAll = () => {
        return localStorage.clear()
    }


    static exists = (key) => {
        return !!localStorage.getItem(key)

    }

}

export default CacheProvider
