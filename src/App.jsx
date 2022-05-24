import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

// import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Menu from './components/Menu';
import Card from './components/Card';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { NoMatchRoute } from './components/NoMatchRoute';
import SkeletonCard from './components/Card/SkeletonCard';

function App() {
  const [items, setItems] = React.useState([]);
  const [drawerItems, setDrawerItems] = React.useState([]); // adding to drawer
  const [favorites, setFavorites] = useState([]); // массив для избранного
  const [searchValue, setSearchValue] = React.useState('');
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true); // для SkeletonCard

  //----BEGINNING OF BACKEND---------------------------------------------------
  // useEffect, что рендер списка товаров был один раз, хук следит за этим.
  React.useEffect(() => {
    // два способа получать данные с бека fetch и axios (популярный)
    // fetch('https://622072c8ce99a7de1959cf52.mockapi.io/items').then(res => {
    //   return res.json();
    // }).then(json => {
    //   setItems(json)
    // });
    // Получение информации с BACKEND и помещаем в переменные items, drawersItems, favorites c помощью метоводов setItems, setDrarsItems, setFavorites:
    // Основные карты:
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/items').then((res) => {
      setItems(res.data);
      setIsLoading(false); // для SkeletonCard
    });
    //Корзина:
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/drawerItems').then((res) => {
      setDrawerItems(res.data);
    });
    // Избранное: 
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/favorities').then((res) => {
      setFavorites(res.data);
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



  //----BEGINNING OF FAVORITES-------------------------------------------------
  const onAddToFavories = (obj) => {
    //   // передай по сслыке объект, к. возвращает метод onAddToFavorities.
    axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/favorities', obj);
    setFavorites((prev) => [...prev, obj]);
  };
  //----END OF FAVORITES-----------------------------------------------------



  //----END OF BACKEND--------------------------------------------------------
  // METHOD for saerch
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

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
      <Menu
        onClick={(name) => console.log(name)}
        items={['Косметика', 'Термогружки', 'Ланч-боксы', 'Свечи', 'Бутылки']}
      />

      <div className="content">
        <div className="sub-title_content">
          <h3>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все товары'}</h3>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                className="clear-btn"
                onClick={() => setSearchValue('')}
                src="/img/drawer/X.svg"
                alt="Clear"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="content-card">
          {isLoading
            ? [... new Array(9)].map((_, index) => <SkeletonCard key={index} />)
            : items
              // .filter((item) => item.title.toLowerCase().includes(searchValue))
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onFavorites={(obj) => onAddToFavories(obj)}
                  onPlus={(obj) => onAddToDrawer(obj)}
                />
              ))
          }
        </div>
      </div>
      {/* <Routes>
        <Route path='/'element={
          <Home
            items={items}
            setSearchValue={setSearchValue}
            onAddToDrawer={onAddToDrawer}
            onAddToFavories={onAddToFavories}
            onChangeSearchInput={onChangeSearchInput} />} />

        <Route path='/favorites' element={
          <Favorites
            items={favorites} />} />

        <Route path='*' element={<NoMatchRoute />} />
      </Routes> */}
    </div>
  );
}

export default App
