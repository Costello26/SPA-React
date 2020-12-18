import React from 'react';
import './App.css';
import { NavBar } from './Components/navbar';
import { Menu } from './Components/menu';
import { GlobalStyle } from './Components/globalStyle';
import { TopBanner } from './Components/topBanner';
import { ModalItem } from './Components/modalItem';
import { Order } from './Components/Order';

function App() {
  const [openItem, setOpenItem] = React.useState(null); 
  console.log('openItem: ', openItem);
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <TopBanner/>
      <Menu setOpenItem={setOpenItem}/> 
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}></ModalItem>
    </>
  );
}

export default App;
