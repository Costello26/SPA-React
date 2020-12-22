import React from 'react';
import styled from 'styled-components';
import trash from '../../img/trash.svg';
import { totalPriceItem } from "../Modal/modalItem";
import { toLocal } from "../Functions/ToLocal";

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

const NameStyle = styled.span`
    width: 50%;
`;

const Quantity = styled.span`
    width: 20%;
    text-align: center;
`;

export const OrderListItem = ({ order }) => {
    return(
        <ItemStyled>
            <NameStyle>{order.name}</NameStyle>
            <Quantity>{order.count}</Quantity>
            <PriceStyled>{toLocal(totalPriceItem(order))}</PriceStyled>
            <TrashButton/>
        </ItemStyled>
    )
};