import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/dna.svg';

const active = '#eee';

const headerStyles = {
    width: '100%',
    backgroundColor: '#3b3b3b',
    display: 'flex',
    justifyContent: 'center'
}

const NavBarStyled = styled.div`
    max-width: 1400px;
    padding: 10px 0;
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
    border: 1px solid ${active};
    color: ${active};
    background-color: transparent;
    cursor: pointer;
    padding: 5px 20px;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    transition .3s;
    outline: none;
    &:hover{
        background-color: ${active};
        color: #3b3b3b;
    }
`;

export const NavBar = () => (
    <header style={headerStyles}>
        <NavBarStyled>
            <LogoLink href="##">
                <LogoStyled src={logoImg} alt="logo"/>
                <h1>STATION 21</h1>
            </LogoLink>
            <LoginButton>Log in</LoginButton>
        </NavBarStyled>
    </header>
)