export default defineEventHandler(async (event) => {
    
    // // hanlde query parameter
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_rEa5Vuy8xAdA5l5NxjoNFhhoA7UXYyruCkVP3wDA`)

    return data
})