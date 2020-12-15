import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './listItem';

const MenuStyled = styled.main`
    section{
        margin-top: 60px;
        h2{
            text-align: center;
            font-size: 36px;
            padding: 20px 0;
        }
    }
`;

export const Menu = () => (
    <MenuStyled className="container">
        <section>
            <h2>Item List heading</h2>
            <ListItem itemList={dbMenu.burger}/>
        </section>
        <section>
            <h2>Second Item List heading</h2>
            <ListItem itemList={dbMenu.other}/>
        </section>
    </MenuStyled>
)