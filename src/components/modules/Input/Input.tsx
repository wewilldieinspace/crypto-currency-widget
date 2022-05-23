// REACT
import React, { useState } from 'react'
// COMPONENTS
import { Container, Amount, SelectContainer, SelectItem } from './Input.styles'
// TYPES
import { InputProps } from './Input.types'
import { Currency } from "../../../types/Currency";

export const Input = ({currencyList, amount, activeCurrency}: InputProps) => {
    const [isListOpen, setListOpen] = useState<boolean>(false)
    return (
        <Container>
            <Amount value={amount} />

            <SelectContainer>
                {currencyList ? currencyList.map((currency: Currency, index: number) => {
                    const { name, image } = currency
                    return (
                        <SelectItem image={image} key={`${name}_${index}`}>{name}</SelectItem>
                    )
                }): null}
            </SelectContainer>
        </Container>
    )
}