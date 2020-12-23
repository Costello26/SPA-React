import React from 'react';
import styled from 'styled-components';
import { OrderListItem } from './OrderListItem';
import { Button } from './orderButton';
import { totalPriceItem} from "../Functions/totalPriceItem";
import { toLocal } from "../Functions/ToLocal";

const OrderWrap = styled.div`
    background-color: #fff;
    flex-direction: column;
    position: fixed;
    top: 0px;
    left: 0;
    height: 100%;
    width: 20%;
    min-width: 200px;
    z-index: 2;
    padding: 15px;
    -webkit-box-shadow: 0px 0px 21px 1px rgba(81, 81, 81, 0.33);
    -moz-box-shadow: 0px 0px 21px 1px rgba(81, 81, 81, 0.33);
    box-shadow: 0px 0px 21px 1px rgba(81, 81, 81, 0.33);
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

const Empty = styled.p`
    padding: 15px;
`;


export const Order = ({ orders }) => {
    const total = orders.reduce((result, order) => totalPriceItem(order) + result,0);
    const singleQty = orders.map(order => order.count).reduce((partial_sum, a) => partial_sum + a,0);

    return(
        <>
            <OrderWrap>
                <HeadingOrder>Order</HeadingOrder>
                <OrderContent>
                    { orders.length ? 
                    <OrderList>
                        {orders.map(order => <OrderListItem order={order}/>)}
                    </OrderList>
                    :
                    <Empty>Корзина пуста!</Empty> }
                </OrderContent>
                <div className="togglerButton"></div>
                <OrderBottom>
                    <Total>Quantity: {singleQty}</Total>
                    <Total>Total: {toLocal(total)}</Total>
                    <Button></Button>
                </OrderBottom>
            </OrderWrap>
        </>
    )
};