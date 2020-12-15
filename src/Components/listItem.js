import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
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
        transition: .3s;
        &:hover{
            opacity: 0;
        }
    }
`;

export const ListItem = ({ itemList }) => (
    <List>
        {itemList.map(item => (
            <Item key={item.id} img={item.img}>
                <div class="mask">
                    <span>{item.name}</span>
                </div>
            </Item>
        ))}
    </List>
);