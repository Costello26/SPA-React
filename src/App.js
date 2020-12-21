import React from 'react';
import './App.css';
import { NavBar } from './Components/Navbar/navbar';
import { Menu } from './Components/Menu/menu';
import { GlobalStyle } from './Components/Style/globalStyle';
import { TopBanner } from './Components/Menu/topBanner';
import { ModalItem } from './Components/Modal/modalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <TopBanner/>
      <Menu {...openItem}/> 
      {openItem.openItem && <ModalItem {...openItem} {...orders}></ModalItem>}
    </>
  );
}

export default App;
