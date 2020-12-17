import React from 'react';
import styled from 'styled-components';
import { Button } from './orderButton';

const Modal = styled.div`
    position: fixed;
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

export const ModalItem = ({ openItem, setOpenItem }) => {
    function closeModal(e){
        if(e.target.id === 'Overlay'){
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
    return(
        <Modal id="Overlay" onClick={closeModal}>
            <div className="modalBody">
                <Banner img={openItem.img}></Banner>
                <BannerContent>
                    <h2>{openItem.name}</h2>
                    <Price>{openItem.price.toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</Price>
                    <Button></Button>
                </BannerContent>
            </div>
        </Modal>
    )
}