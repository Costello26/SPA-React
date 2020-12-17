import React from 'react';
import styled from 'styled-components';

const OrderButton = styled.a`
    display: inline-block;
    padding: 10px 45px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: 2px solid #000;
    transition: .3s;
    text-transform: uppercase;
    font-size: .6em;
    letter-spacing: 2px;
    &:hover{
        color: #000;
        background-color: #fff;
        border: 2px solid #000;
    }
`;

export const Button = () => {
    return(
        <OrderButton href="##">
            Заказать
        </OrderButton>
    )
}