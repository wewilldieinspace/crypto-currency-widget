import styled from "styled-components";
import { Input as InputElement } from "../.."

export const Container = styled.form`
    margin-top: 60px;
`

export const CurrencyFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SwitchButton = styled.button`
    display: flex;
    flex-direction: column;

    width: 20px;
    height: 20px;

    margin: 0 30px;
    padding: 4px;

    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0);

    border-width: 0;

    cursor: pointer;
`

export const ArrowRight = styled.span`
    width: 16px;
    height: 8px;
    display: flex;

    &:before {
        content: "";
        
        width: 100%;
        height: 8px;

        background-color: ${({theme}) => theme.colors.deepskyblue};

        clip-path: polygon(0 3px,calc(100% - 4px) 3px, calc(100% - 4px) 0, 100% 50%,calc(100% - 4px) 100%,calc(100% - 4px) calc(100% - 3px), 0 calc(100% - 3px));
    }
}
`

export const ArrowLeft = styled(ArrowRight)`
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
`


export const InputContainer = styled.div`
    position: relative;

    height: fit-content;
`

export const Input = styled(InputElement)<{isOpen: boolean}>`
    padding-right: 50px;
    outline: none;
    ${({isOpen}) => isOpen && `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-color: #E3EBEF;
    `}
`

export const CurrentCurrencyValue = styled.span<{isOpen: boolean, image: string}>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
    bottom: 0;
    right: ${({isOpen}) => isOpen ? "13px" : "35px"};

    padding: 10px 0 10px 25px;

    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};

    background-image: url("${({image}) => image}");
    background-repeat: no-repeat;
    background-position: left;

    cursor: pointer;
    opacity: ${({isOpen}) => isOpen ? "0" : "1"};

    transition: all .3s ease-in-out;
`

export const CloseButton = styled.span<{isOpen: boolean}>`
    position: absolute;
    display: inline-block;

    top: 0;
    bottom: 0;
    right: 0;

    width: 40px;

    cursor: pointer;

    transform: rotate(${({isOpen}) => isOpen ? "180deg" : "0deg"});

    transition: all .2s ease-in-out;

    &:before,
    &:after {
        content: "";

        position: absolute;

        top: ${({isOpen}) => isOpen ? "0" : "2px"};
        bottom: ${({isOpen}) => isOpen ? "0" : "2px"};

        top: 21px;
        right: 16px;
        bottom: 21px;

        width: 1px;

        background: ${({theme}) => theme.colors.gray};

        border-radius: 2px;

        transition: all .2s ease-in-out;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
        left: ${({isOpen}) => isOpen ? "23px" : "18px"};
    }
`

export const CurrencyList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-height: 150px;

    border: 1px solid #C1D9E6;
    border-top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

    overflow: auto;
`

export const CurrencyListItem = styled.li<{image: string}>`
    display: flex;
    align-items: center;

    padding-left: 40px;

    width: 100%;
    min-height: 50px;

    font-size: 16px;
    color: ${({theme}) => theme.colors.gray};

    background-color: #F6F7F8;
    background-image: url("${({image}) => image}");
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 10px;

    cursor: pointer;

    white-space: nowrap;
    overflow: hidden;

    transition: all .2s ease-in-out;

    &:hover {
        background-color: #EAF1F7;
    }

    > span {
        margin-right: 1em;

        font-size: 16px;
        color: ${({theme}) => theme.colors.primary};
    }
`
