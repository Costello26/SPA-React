//import logo from './logo.svg';
//import React, { Component } from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/navbar';

const GlobalStyle = createGlobalStyle`
      html{
        box-sizing: border-box;
      }
      *, *::before, *::after{
        box-sizing: inherit;
      }
      body{
        margin: 0;
        padding: 0;
        font-family: 'Raleway' , sans-serif;
        font-size: 14px;
        color: #000;
      }
      a{
        color: inherit;
        text-decoration: none;
      }
      ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      h1, h2, h3{
        font-family: 'Bebas Neue', sans-serif;
        margin: 0;
        padding: 0px;
        letter-spacing: 1px;
      }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    </>
  );
}

export default App;
