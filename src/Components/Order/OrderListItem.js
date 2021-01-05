import React from 'react';
import styled from 'styled-components';
import trash from '../../img/trash.svg';
import { totalPriceItem } from "../Functions/totalPriceItem";
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
`;

const PriceStyled = styled.span`
    margin-right: 10px;
`;

const NameStyle = styled.span`
    width: 30%;
`;

const Quantity = styled.span`
    width: 20%;
    text-align: center;
`;

const Toppings = styled.div`
    width: 100%;
    font-size: 14px;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {
    const toppings = order.topping.filter(item => item.checked).map(item => ' ' + item.name ).join(', ');
    return(
        <ItemStyled>
            <NameStyle>{order.choice ? order.choice : order.name}</NameStyle>
            <Quantity>{order.count}</Quantity>
            <PriceStyled>{toLocal(totalPriceItem(order))}</PriceStyled>
            <TrashButton onClick={() => deleteItem(index)} />
            {toppings && <Toppings>Топпинги: {toppings}</Toppings>}
        </ItemStyled>
    )
};