import React, { useContext } from 'react';
//import styled from 'styled-components';
import { Modal , ModalBody, BannerContent} from '../Modal/modalItem';
import { Total } from '../Order/Order';
import { Button } from '../Order/orderButton';
import { totalPriceItem, projection } from "../Functions/totalPriceItem";
import { toLocal } from "../Functions/ToLocal";
import { Context } from '../Functions/Context';

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : "no choices"],
}

const sendOrder = (dataBase, orders, authentication) => {
    const NewOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
        clientName: authentication.displayName, 
        email: authentication.email,
        order: NewOrder
    });
}

export const OrderConfirm = () => {
    const {
        orders: { orders, setOrders },
        auth: { authentication },
        orderConfirm: { setOpenOrderConfirm },
        database
    } = useContext(Context);

    const total = orders.reduce((result, order) => totalPriceItem(order) + result,0); 
    //const dataBase = database();
    return(
        <Modal>
            <ModalBody>
                <BannerContent>
                    <h3>Проверьте Ваш заказ, и подтвердите его.</h3>
                    <Total>Имя: {authentication.displayName}</Total>
                    <Total>Итого: {toLocal(total)}</Total>
                    <Button text="Подтверидть" onClick={() => {sendOrder(database, orders, authentication);
                                            setOrders([]);
                                            setOpenOrderConfirm(false);
                    }}></Button>
                </BannerContent>
            </ModalBody>
        </Modal>
    )
}