import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import './App.css';
import { NavBar } from './Components/Navbar/navbar';
import { Menu } from './Components/Menu/menu';
import { GlobalStyle } from './Components/Style/globalStyle';
import { TopBanner } from './Components/Menu/topBanner';
import { ModalItem } from './Components/Modal/modalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDb } from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/Context';

const firebaseConfig = {
  apiKey: "AIzaSyDCDYiBXBYwFIzstZlzPfwiRkcOB3j5Nwg",
  authDomain: "spa-react-863dd.firebaseapp.com",
  databaseURL: "https://spa-react-863dd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spa-react-863dd",
  storageBucket: "spa-react-863dd.appspot.com",
  messagingSenderId: "707779683255",
  appId: "1:707779683255:web:2e04e1dde9a2554747be32"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const database = firebase.database();
  useTitle(openItem.openItem)
  const dbMenu = useDb(database);
  const orderConfirm = useOrderConfirm();
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      database: database,
      dbMenu: dbMenu
    }}>
      <GlobalStyle/>
      <NavBar />
      <Order />
      <TopBanner/>
      <Menu dbMenu={dbMenu}/> 
      {openItem.openItem && <ModalItem></ModalItem>}
      {orderConfirm.openOrderConfirm && 
        <OrderConfirm/>}
    </Context.Provider>
  );
}

export default App;
