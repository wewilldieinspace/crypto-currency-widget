// REACT
import { useState, useEffect, useRef } from 'react'
// COMPONENTS
import { 
    InputContainer as Container, 
    Input, 
    CloseButton, 
    CurrencyList, 
    CurrencyListItem, 
    CurrentCurrencyValue } from './Form.styles'
// TYPES
import { ExchangeInputProps } from './Form.types'
import { Currency } from '../../../types/Currency'
// UTILS
import { sliceString } from '../../../utils'


export const ExchangeInput = ({ currentValue, items, amount, changeAmountHandler, searchHandler }: ExchangeInputProps): JSX.Element => {
    const [isInputOpen, setInputOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string | number>('');
    const inputContainerRef = useRef<HTMLDivElement | null>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        searchHandler(e.target.value);
    }

    const focusHandler = () => {
        setInputOpen(true);
    }

    const toggleListHandler = () => {
        setInputOpen(!isInputOpen)
    }

    const selectListItemHandler = (index: number) => {
        setInputOpen(false);
        changeAmountHandler(index);
    }

    const outsideClickHandler = (e: MouseEvent) => {
        if (
            inputContainerRef.current &&
            // @ts-ignore
            e.path.includes(inputContainerRef.current)
          ) {
            return
          }
          setInputOpen(false);
    }

    useEffect(() => {
        if (!isInputOpen) {
            setValue(amount || "");
            searchHandler("")
        } else {
            setValue("")
        }
    }, [isInputOpen, amount]);

    useEffect(() => {
        if (window) {
            window.addEventListener("click", outsideClickHandler);
          }
          return () => {
            if (window) {
              window.removeEventListener("click", outsideClickHandler);
            }
          };
    }, [])

    return (
        <Container ref={inputContainerRef}>
            <Input 
                isOpen={isInputOpen} 
                onFocus={focusHandler} 
                placeholder={isInputOpen ? "Search" : ""} 
                value={value} 
                onChange={changeHandler}
            />
            <CurrentCurrencyValue 
                onClick={focusHandler} 
                image={currentValue ? currentValue.image : ""} 
                isOpen={isInputOpen}>{currentValue ? sliceString(currentValue.ticker.toUpperCase()) : ""}
            </CurrentCurrencyValue>
            <CloseButton onClick={toggleListHandler} isOpen={isInputOpen} />

            { isInputOpen ? (
                <CurrencyList>

                    {items.length ? items.map((item: Currency, index: number) => {
                        const { ticker, name, image } = item
                        return (
                            <CurrencyListItem 
                                key={`${Date.now()}_${ticker}_${index}`} 
                                onClick={() => selectListItemHandler(index)}
                                image={image}
                            ><span>{sliceString(ticker.toUpperCase(), 5)}</span>{sliceString(name, 11)}</CurrencyListItem>
                        )
                    }) : null}

                </CurrencyList> ) : null
            }
        </Container>
    )
}