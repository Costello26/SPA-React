import React from 'react';
import styled from 'styled-components';
import trash from '../img/trash.svg';

const TrashButton = styled.button`
    width: 20px;
    height: 20px;
    display: inline-block;
    border: none;
    background: url(${trash}) center center no-repeat;
    background-size: cover;
    cursor: pointer;
    outline: none;
`;

const ItemStyled = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
`;

const PriceStyled = styled.span`
    margin-right: 10px;
`;

const NameStyle = styled.span``;



const ItemName = () => {
    return(
        <NameStyle>
            JS Burger
        </NameStyle>
    )
};

const ItemQty = () => {
    return(
        2
    )
};

const ItemPrice = () => {
    return(
        <PriceStyled>
            2400
        </PriceStyled>
    )
};

export const OrderListItem = () => {
    return(
        <ItemStyled>
            <ItemName></ItemName>
            <ItemQty></ItemQty>
            <ItemPrice></ItemPrice>
            <TrashButton/>
        </ItemStyled>
    )
};