import styled from "styled-components";

export const FormTextInput = styled.input`
    display: inline-flex;
    justify-content: flex-start;
    width: 95%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;
    color: ${props => props.theme.colors.dark};
    border: 1px solid #A0A0A0D0;
    height: 2.5em;
    padding-bottom: calc(.5em - 1px);
    padding-left: calc(.75em - 1px);
    padding-right: calc(.75em - 1px);
    padding-top: calc(.5em - 1px);
    line-height: 1.5;

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const ErrorMsg = styled.div`
    font-size: ${props => props.theme.fontsSizes.small};
    color: ${props => props.theme.colors.error};
    margin-bottom: 10px;
    text-align: left;
`;