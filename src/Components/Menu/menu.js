import React, { useContext } from 'react';
import styled from 'styled-components';
import loading from '../../img/loading.svg';
import { ListItem } from './listItem';
import { Context } from '../Functions/Context';

const MenuStyled = styled.main`
    margin-left: 20%;
    width: 80%;
    section{
        width: 100%;
        //margin-top: 0px;
        h2{
            text-align: center;
            font-size: 36px;
            padding: 20px 0;
        }
    }
`;

const LoadingList = styled.div`
    width: 100%;
    height: calc(100vh - 210px);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 70px;
        height: 70px;
        animation: rotate 3s infinite;
        @keyframes rotate{
            from{
                transform: rotate(0deg);
            }
            to{
                transform: rotate(360deg);
            }
        }
    }
`;

export const Menu = () => {
    const { dbMenu } = useContext(Context);
    return(
        <MenuStyled>
            { dbMenu ? 
            <>
            <section>
                <h2>Burgers</h2>
                <ListItem itemList={dbMenu.burger}/>
            </section>
            <section>
                <h2>Drinks & Snacks</h2>
                <ListItem itemList={dbMenu.other}/>
            </section>
            </> 
            : 
            <LoadingList>
                <img src={loading} alt="Loading"/>
            </LoadingList>
            }
        </MenuStyled>
    )
}