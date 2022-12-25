import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { setActiveItem } from './redux/slices/filterSlice';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NoMatchRoute from './pages/NoMatchRoute';

//useConext:
export const SearchContext = React.createContext('');

function App() {
  const dispatch = useDispatch()

  const activeItem = useSelector((state) => state.filter.activeItem) 

  const onClickCategory = (id) => {
    console.log(id)
    dispatch(setActiveItem(id))
  }


  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [drawerItems, setDrawerItems] = React.useState([]); // adding to drawer
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [favorites, setFavorites] = useState([]); // массив для избранного
  const [isLoading, setIsLoading] = React.useState(true); // для SkeletonCard
  // const [activeItem, setActiveItem] = React.useState(0); // категории

  // useEffect, чтобы рендер списка товаров был один раз, хук следит за этим.
  // Получение информации с BACKEND и помещаем в переменные items, drawersItems, favorites c помощью метоводов setItems, setDrarsItems, setFavorites:
  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const drawerResponce = await axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/drawerItems');
      const favoritesResponce = await axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/favorities');
      const itemsResponce = await axios.get(`https://622072c8ce99a7de1959cf52.mockapi.io/items?category=${activeItem > 0 ? `${activeItem}` : ''}`);

      //${activeItem>0 ? `categoty=${activeItem}` : ''}

      setDrawerItems(drawerResponce.data);
      setFavorites(favoritesResponce.data);
      setItems(itemsResponce.data);
      setIsLoading(false); // для SkeletonCard
    }
    fetchData();
  }, [activeItem]);

  //----mockAPI OF FAVORITES
  const onAddToFavories = async (obj) => {
    try {
      // передай по сслыке объект,  . возвращает метод onAddToFavorities.
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://622072c8ce99a7de1959cf52.mockapi.io/favorities/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/favorities', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  };
  //----mockAPI OF FAVORITES
  //----mockAPI OF DRAWER
  // Adding the cards in Drawer - METHOD вызывается при нажатии на плюс
  const onAddToDrawer = (obj) => {
    // передай по сслыке объект, к. возвращает метод onAddToDrawer.
    if (drawerItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://622072c8ce99a7de1959cf52.mockapi.io/drawerItems/${obj.id}`);
      setDrawerItems((prev) => prev.filter((item) => Number(item.id) === Number(obj.id)));
    } else {
      axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/drawerItems', obj);
      // setDrawerItems([...drawerItems, obj]);
      setDrawerItems((prev) => [...prev, obj]);
    }
  };
  //передаем id в метода onRemoveFromDrawer для удаления
  const onRemoveFromDrawer = (id) => {
    axios.delete(`https://622072c8ce99a7de1959cf52.mockapi.io/drawerItems/${id}`);
    setDrawerItems((prev) => prev.filter((drawerItems) => drawerItems.id !== id));
  };
  //----mockAPI OF DRAWER

  // METHOD for Favorite adding
  // const onClickFavorite = () => {
  //   onFavorites({imageUrl, title, price});
  //   setIsFavorite(!isFavorite);
  // }

  // METHOD for <Menu />
  // const onChangeCategor = (id) => {
  //   console.log(id)
  // };

  return (
      <div className="wrapper">
        <SearchContext.Provider value={{ items, setItems, isLoading, drawerItems, setDrawerItems, onAddToDrawer, onAddToFavories, searchValue, setSearchValue, favorites, setFavorites, onClickCategory }}>
          {drawerOpened && (
            <Drawer
              items={drawerItems}
              onClose={() => setDrawerOpened(false)}
              onRemove={onRemoveFromDrawer}
            />
          )}
          <Header onClickDrawer={() => setDrawerOpened(true)} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<NoMatchRoute />} />
          </Routes>
        </SearchContext.Provider>
      </div>
  );
}

export default App
