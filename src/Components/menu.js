import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './listItem';

const MenuStyled = styled.main`
    section{
        //margin-top: 0px;
        h2{
            text-align: center;
            font-size: 36px;
            padding: 20px 0;
        }
    }
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled className="container">
        <section>
            <h2>Burgers</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
        </section>
        <section>
            <h2>Drinks & Snacks</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
        </section>
    </MenuStyled>
)