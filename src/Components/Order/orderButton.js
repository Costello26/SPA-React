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
    text-align: center;
    font-size: .6rem;
    letter-spacing: 2px;
    &:hover{
        color: #000;
        background-color: #fff;
        border: 2px solid #000;
    }
    &.disabled{
        pointer-events: none;
        cursor: no-drop;
        background-color: #444;
        border-color: #444;
    }
`;


const defaultText = `Заказать`;

export const Button = ({onClick, text, choices}) => {
    return(
        <OrderButton onClick={onClick} className={ choices ? 'disabled' : null } href="##">
            { text ? text : defaultText }
        </OrderButton>
    )
}