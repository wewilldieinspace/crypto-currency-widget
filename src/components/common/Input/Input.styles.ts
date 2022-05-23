import styled from "styled-components";

export const Input = styled.input`
    display: inline-block;

    min-height: 50px;

    padding: 0 1em;

    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};

    background-color: #F6F7F8;

    border: 1px solid #C1D9E6;
    border-radius: 5px;
`