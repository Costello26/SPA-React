import React from 'react';
import styled from 'styled-components';

const CountWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 15px;
    justify-content: center;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
`;
const Button = styled.input`
    width: 40px;
    height: 40px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: none;
    font-size: 1em;
`;

const Quantity = styled.input`
    width: 15%;
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
    outline: none;
    font-size: 1em;
`;

export function CountItem({count, setCount, onChange}){
    //console.log('Number(count): ', count);
    return(
        <CountWrap>
            <Button type="button" disabled={count <= 1} onClick={() => setCount(count-1)} value="-"></Button>
            <Quantity type="number" min="1" max="60" value={count < 1 ? 1 : count } onChange={onChange}></Quantity>
            <Button type="button" onClick={() => setCount(count+1)} value="+"></Button>
            
        </CountWrap>
    )
}