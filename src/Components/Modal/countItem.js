import React from 'react';
import styled from 'styled-components';

const CountWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 15px;
    justify-content: center;
`;
const Button = styled.input`
    width: 30px;
    height: 30px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: none;
`;

const Quantity = styled.input`
    width: 15%;
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
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