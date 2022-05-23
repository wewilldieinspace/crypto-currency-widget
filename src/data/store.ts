import create from 'zustand'
import { fetchListOfCurrencies, fetchMinimalExchangeAmount, fetchEstimatedExchangeAmount } from '../utils'

export const useStore = create((set: any, get: any) => ({
    listOfCurrencies: [],
    currentCurrency: null,
    exchangeCurrencyFrom: 1,
    exchangeCurrencyTo: 0,
    minimalExchangeAmount: 0,
    estimatedExchangeAmount: 0,
    isSearchActive: false,
    searchList: [],
    error: null,


    setExchangeCurrencyFrom: (index: number) => {
        set({ exchangeCurrencyFrom: index })
    },

    setExchangeCurrencyTo: (index: number) => {
        set({ exchangeCurrencyTo: index })
    },

    swapCurrencies: async () => {
        const from = get().exchangeCurrencyFrom;
        const to = get().exchangeCurrencyTo;

        set({ exchangeCurrencyFrom: to })
        set({ exchangeCurrencyTo: from })

        await get().getMinimalExchangeAmount()
        await get().getEstimatedExchangeAmount()
    },

    getListOfCurrencies: async () => {
        const listOfCurrencies = await fetchListOfCurrencies();    
        set({ listOfCurrencies })
    },

    setNewAmount: async () => {
        await get().getMinimalExchangeAmount()
        await get().getEstimatedExchangeAmount()
    },

    getMinimalExchangeAmount: async () => {
        const from = get().listOfCurrencies[get().exchangeCurrencyFrom].ticker
        const to = get().listOfCurrencies[get().exchangeCurrencyTo].ticker

        const response = await fetchMinimalExchangeAmount(from, to);  

        if (response) {
            set({ minimalExchangeAmount: response.minAmount })
        } else {
            set({ error: 'AAAAAAAAAAAA!!!' })
        }
    },

    getEstimatedExchangeAmount: async () => {
        const minAmount = get().minimalExchangeAmount
        const from = get().listOfCurrencies[get().exchangeCurrencyFrom].ticker
        const to = get().listOfCurrencies[get().exchangeCurrencyTo].ticker

        const response = await fetchEstimatedExchangeAmount(minAmount, from, to);    

        if (response) {
            set({ estimatedExchangeAmount: response.estimatedAmount })
        } else {
            set({ error: 'AAAAAAAAAAAA!!!' })
        }
    },

    getInitialStore: async () => {
        await get().getListOfCurrencies()
        await get().getMinimalExchangeAmount()
        await get().getEstimatedExchangeAmount()
    }
}))