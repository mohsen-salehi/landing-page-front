import '@/styles/globals.css'
import {StoreContextProvider} from "@/store";

export default function App({Component, pageProps}) {
    return (
        <StoreContextProvider>
            <Component {...pageProps} />
        </StoreContextProvider>
    )
}


