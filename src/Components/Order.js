import React from 'react';
import styled from 'styled-components';
import { OrderListItem } from './OrderListItem';
import { Button } from './orderButton';

const OrderWrap = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    height: calc(100% - 60px);
    width: 20%;
    min-width: 200px;
    z-index: 2;
    padding: 15px;
`;

const HeadingOrder = styled.h2`
    font-size: 2em;
    text-align: center;
    padding-top: 1em;
`;

const OrderContent = styled.div`
    font-size: 20px !important;
    padding: 10px 0px;
`;

const OrderList = styled.ul``;

const Total = styled.span`
    width: 100%;
    display: block;
    padding: 5px 0px;
    font-size: 24px;
    font-family: 'Bebas Neue', sans-serif;
`;

const OrderBottom = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: 20px;
    text-align: center;
`;

export const Order = () => {
    return(
        <>
            <OrderWrap>
                <HeadingOrder>Order</HeadingOrder>
                <OrderContent>
                    <OrderList>
                        <OrderListItem></OrderListItem>
                        <OrderListItem></OrderListItem>
                        <OrderListItem></OrderListItem>
                    </OrderList>
                </OrderContent>
                <OrderBottom>
                    <Total>Quantity: 8</Total>
                    <Total>Total: 1230₽</Total>
                    <Button></Button>
                </OrderBottom>
            </OrderWrap>
        </>
    )
};