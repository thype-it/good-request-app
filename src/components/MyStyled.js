import styled from "styled-components";

//general

export const MyView = styled.div`
    backround-color: green;
    width: 65%;
    margin-right: 70px;
    position: relative;
`;

export const MyAside = styled.aside`
    backround-color: pruple;
    width: 35%;
`;

export const MyRow = styled.div`
    display: flex;
    justify-content: ${props => props.singleChild? "flex-end": "space-between"};
    align-items: center;
`;

export const MyColumn = styled.div`
    dispplay: flex:
    flex-direction: column;
    margin-right: 1em;
    max-width: ${props => props.maxWidth? props.maxWidth : null};
    &:last-of-type {
        margin-right: 0
    }
`;

export const MyFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

//form

const buttonStyles = `
padding: 1.3em 1.7em;
width: auto;
border-radius: 2.2em;
border: none;
outline: none;
margin-top: 2.5em;
cursor: pointer;
font-size: 1em;
`;

export const MyButton = styled.div`${buttonStyles}`;
export const MySubmit = styled.input`${buttonStyles}`;

export const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;