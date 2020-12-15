//import logo from './logo.svg';
//import React, { Component } from 'react';
import './App.css';
import { NavBar } from './Components/navbar';
import { Menu } from './Components/menu';
import { GlobalStyle } from './Components/globalStyle';
import { TopBanner } from './Components/topBanner';

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <TopBanner/>
      <Menu/> 
      <div className="App">
      </div>
    </>
  );
}

export default App;
