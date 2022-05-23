// TYPES
import { Currency } from "../types/Currency"

export const search = (query: string, list: Currency[]) => {
    return list.filter((item: Currency) => {
        if (item.ticker.toLowerCase().includes(query.toLowerCase()) 
        || item.name.toLowerCase().includes(query.toLowerCase()) ) {
            return true
        }
        return false
    })
}