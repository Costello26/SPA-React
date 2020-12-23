import React from 'react';
import styled from 'styled-components';
import { Button } from '../Order/orderButton';
import { CountItem } from './countItem';
import { useCount } from '../Hooks/useCount';
import { toLocal } from "../Functions/ToLocal";
import { totalPriceItem } from '../Functions/totalPriceItem';

const Modal = styled.div`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(6px);
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .modalBody {
        width: 50%;
        max-width: 600px;
        max-height:600px;
        background-color: #fff;
    }
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background: url(${({img}) => img }) center center no-repeat;
    background-size: cover;
`; 

const BannerContent = styled.div`
    padding: 15px;
    text-align: center;
    font-size: 26px;
`;

const Price = styled.span`
    display: block;
    padding: 15px;
    font-family: 'Bebas Neue',sans-serif;
`;
//export const totalPriceItem = order => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();

    const closeModal = e => {
        if(e.target.id === 'Overlay'){
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    const Total = styled.span`
        display: block;
        font-family: 'Bebas Neue', sans-serif;
        padding: 10px 0;
    `;

    return(
        <Modal id="Overlay" onClick={closeModal}>
            <div className="modalBody">
                <Banner img={openItem.img}></Banner>
                <BannerContent>
                    <h2>{openItem.name}</h2>
                    <Price>{toLocal(openItem.price)}</Price>
                    <CountItem {...counter}></CountItem>
                    <Button onClick={addToOrder} text="В корзину"></Button>
                    <Total>Total: {toLocal(totalPriceItem(order))}</Total>
                </BannerContent>
            </div>
        </Modal>
    )
}