import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NoMatchRoute from './pages/NoMatchRoute';

function App() {
  const [drawerItems, setDrawerItems] = React.useState([]); // adding to drawer
  const [drawerOpened, setDrawerOpened] = React.useState(false);


  //----BEGINNING OF BACKEND---------------------------------------------------
  // useEffect, что рендер списка товаров был один раз, хук следит за этим.
  React.useEffect(() => {
    // Получение информации с BACKEND и помещаем в переменные items, drawersItems, favorites c помощью метоводов setItems, setDrarsItems, setFavorites:
    //Корзина:
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/drawerItems').then((res) => {
      setDrawerItems(res.data);
    });
  }, []);

  //----BEGINNING OF DRAWER---------------------------------------------------
  // Adding the cards in Drawer - METHOD вызывается при нажатии на плюс
  const onAddToDrawer = (obj) => {
    // передай по сслыке объект, к. возвращает метод onAddToDrawer.
    axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/cartInDrawer', obj);
    setDrawerItems([...drawerItems, obj]);
  };
  //передаем id в метода onRemoveFromDrawer для удаления
  const onRemoveFromDrawer = (id) => {
    axios.delete(`https://622072c8ce99a7de1959cf52.mockapi.io/cartInDrawer/${id}`);
    setDrawerItems((prev) => prev.filter((drawerItems) => drawerItems.id !== id));
  };
  //----END OF DRAWER---------------------------------------------------------



 
  //----END OF BACKEND--------------------------------------------------------

  return (
    <div className="wrapper">
      {drawerOpened && (
        <Drawer
          items={drawerItems}
          onClose={() => setDrawerOpened(false)}
          onRemove={onRemoveFromDrawer}
        />
      )}
      <Header onClickDrawer={() => setDrawerOpened(true)} />
      <Routes>
        <Route path='/'element={<Home />} />

        {/* <Route path='/favorites' element={
          <Favorites
            items={favorites} />} /> */}

        <Route path='*' element={<NoMatchRoute />} />
      </Routes>
    </div>
  );
}

export default App
