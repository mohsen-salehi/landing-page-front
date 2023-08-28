let appEnv = process.env.NEXT_APP_ENV
// console.log(appEnv);
const config = {
    development: {
        base_url: 'http://api.griffin.local/',
        url: "http://griffin.local",
    },
    test: {
        base_url: 'https://landing.elanzacom.ir/api/',
        url: "https://elanzacom.ir",
    },
    production: {
        base_url: 'https://api.elanzacom.ir/',
        url: "https://elanzacom.ir",
    }
}
Object.freeze(config)

export default config["test"]