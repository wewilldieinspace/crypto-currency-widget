// REACT
import { useState, memo, useCallback, useEffect } from "react"
// ZUSTAND
import { useStore } from "../../../data"
// COMPONENTS
import { ExchangeInput } from "./ExchangeInput"
import { 
    Container, 
    SwitchButton, 
    ArrowLeft, 
    ArrowRight,
    CurrencyFormContainer
    } from "./Form.styles"
import { Text } from "../../common";
// TYPES
import { Currency } from "../../../types/Currency"
// UTILS
import { search } from "../../../utils"


export const Form = memo(function Form(): JSX.Element {
    const [searchResult, setSearchResult] = useState<Currency[]>([])

    const { 
        listOfCurrencies, 
        exchangeCurrencyFrom, 
        exchangeCurrencyTo, 
        minimalExchangeAmount,
        estimatedExchangeAmount,
        getInitialStore,
        setNewAmount,
        setExchangeCurrencyFrom,
        setExchangeCurrencyTo,
        swapCurrencies,
        error
    } = useStore((state) => state)

    const searchResultHandler = (query: string) => {
        !!query.trim() ? setSearchResult(search(query, listOfCurrencies)) : setSearchResult([]) 
    }

    const changeMinimalAmountHandler = useCallback((index: number) => {
        setExchangeCurrencyFrom(index);
        setNewAmount();
    }, [exchangeCurrencyFrom, setNewAmount])

    const changeEstimatedAmountHandler = useCallback((index: number) => {
        setExchangeCurrencyTo(index);
        setNewAmount();
    }, [exchangeCurrencyTo, setNewAmount])

    const swapCurrenciesHandler = (e: React.FormEvent) => {
        e.preventDefault();

        swapCurrencies();
    }

    const errorMessage = () => {
        if (error) {
            return <Text 
                size="s" 
                style={{justifyContent: "end"}} 
                color="red"
            >{error}</Text>
        }
        return <Text 
            size="s" 
            style={{justifyContent: "end"}} 
            color="red"
        >this pair is disabled now</Text>
    }

    useEffect(() => {
        getInitialStore();
    }, [])

    return (
        <Container>
            <CurrencyFormContainer>
                <ExchangeInput 
                    items={searchResult.length ? searchResult : listOfCurrencies} 
                    currentValue={listOfCurrencies[exchangeCurrencyFrom]} 
                    amount={minimalExchangeAmount}
                    changeAmountHandler={changeMinimalAmountHandler}
                    searchHandler={searchResultHandler}
                />
                <SwitchButton onClick={swapCurrenciesHandler}>
                    <ArrowRight />
                    <ArrowLeft />
                </SwitchButton>
                <ExchangeInput 
                    items={searchResult.length ? searchResult : listOfCurrencies} 
                    currentValue={listOfCurrencies[exchangeCurrencyTo]} 
                    amount={minimalExchangeAmount < estimatedExchangeAmount ? null : estimatedExchangeAmount}
                    changeAmountHandler={changeEstimatedAmountHandler}
                    searchHandler={searchResultHandler}
                />
            </CurrencyFormContainer>
            {error || minimalExchangeAmount < estimatedExchangeAmount ? errorMessage() : null}
        </Container>
    )
})