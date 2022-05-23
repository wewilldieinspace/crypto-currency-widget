const API = "https://api.changenow.io/v1/";
const API_KEY = "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd";


export const fetchListOfCurrencies = async () => {
    try {
        const response = await fetch(`${API}currencies?active=true`)    
        return response.json()
    } catch (e) {}
}

export const fetchMinimalExchangeAmount = async (from: string, to: string) => {
    try {
        console.log(`${API}min-amount/${from}_${to}?api_key=${API_KEY}`)
        const response = await fetch(`${API}min-amount/${from}_${to}?api_key=${API_KEY}`)    
        return response.json()
    } catch (e) {}
}

export const fetchEstimatedExchangeAmount = async (amount: number, from: string, to: string) => {
    try {
        const response = await fetch(`${API}exchange-amount/${amount}/${from}_${to}?api_key=${API_KEY}`)    
        return response.json()
    } catch (e) {}
}