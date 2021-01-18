import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../img/dna.svg';
import userIcon from '../../img/sign.svg';
import { Context } from '../Functions/Context';

const active = '#eee';

const headerStyles = {
    marginLeft: '20%',
    width: '80%',
    position: 'fixed',
    backgroundColor: '#3b3b3b',
    display: 'flex',
    justifyContent: 'center',
    height: '60px',
    zIndex: '22'
}

const NavBarStyled = styled.div`
    max-width: 1400px;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #fff;
    
`;

const LogoLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

const LogoStyled = styled.img`
    max-width: 100%;
    width: 40px;
    height: 40px;
    margin-right: 0px;
    margin-left: 10px;
`;

const LoginButton = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid ${active};
    color: ${active};
    background-color: transparent;
    cursor: pointer;
    padding: 5px 20px;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    transition: .3s;
    outline: none;
    &:hover{
        background-color: ${active};
        color: #3b3b3b;
    }
    img{
        height: 15px;
        width: 15px;
        padding-left: 3px;
    }
`;

export const NavBar = () => {
    const {auth: {authentication, logIn, logOut} } = useContext(Context);
    return(
        <header style={headerStyles}>
            <NavBarStyled>
                <LogoLink href="##">
                    <LogoStyled src={logoImg} alt="logo"/>
                    <h1>STATION 21</h1>
                </LogoLink>
                { authentication ? 
                    <LoginButton onClick={logOut}>{authentication.displayName} <img src={userIcon} alt="Выйти"/></LoginButton>
                    :
                    <LoginButton onClick={logIn}>Log in <img src={userIcon} alt="log in"/></LoginButton>
                }
                
            </NavBarStyled>
        </header>
    )
}