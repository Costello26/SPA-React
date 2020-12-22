import React from 'react';
import styled from 'styled-components';
import { toLocal } from "../Functions/ToLocal";

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
`;

const Item = styled.li`
    width: 30%;
    max-width: 48%;
    height: 155px;
    margin: 10px;
    background: ${(props) => `url(${props.img});`} center center no-repeat;
    color: #fff;
    cursor: pointer;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    letter-spacing: 1px;
    .mask{
        width: 100%;
        height: 100%;
        backdrop-filter: blur(13px);
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: .3s;
        &:hover{
            opacity: 0;
        }
    }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map(item => (
            <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
                <div className="mask">
                    <span>{item.name}</span>
                    <span>{toLocal(item.price)}</span> 
                </div>
            </Item>
        ))}
    </List>
);