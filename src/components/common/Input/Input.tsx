// COMPONENTS
import { Input as InputElement } from './Input.styles'
// TYPES
import { InputProps } from './Input.types'


export const Input = (props: InputProps) => {
    return (
        <InputElement ref={props.ref} onFocus={props.onFocus} onBlur={props.onBlur} placeholder={props.placeholder} value={props.inputValue} />
    )
}