import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/slices/filterSlice'

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NoMatchRoute from './pages/NoMatchRoute';

//useConext:
export const SearchContext = React.createContext('');

function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [drawerItems, setDrawerItems] = React.useState([]); // adding to drawer
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [favorites, setFavorites] = useState([]); // массив для избранного

  //----BEGINNING OF BACKEND
  // useEffect, что рендер списка товаров был один раз, хук следит за этим.
  React.useEffect(() => {
    // Получение информации с BACKEND и помещаем в переменные items, drawersItems, favorites c помощью метоводов setItems, setDrarsItems, setFavorites:
    //Корзина:
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/drawerItems').then((res) => {
      setDrawerItems(res.data);
    });

  }, []);


  //----BEGINNING OF FAVORITES
  const onAddToFavories = () => {
    // axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/favorities', obj);
    //   setFavorites((prev) => [...prev, obj]);
    console.log ('click to favotites')
    };

  //   const onAddToFavories = (obj) => anyns {
  //     // передай по сслыке объект, к. возвращает метод onAddToFavorities.
  //     if (favorites.find((favObj) => favObj.id === obj.id)) {
  //     axios.delete(`https://622072c8ce99a7de1959cf52.mockapi.io/favorities/${obj.id}`);
  //     setFavorotes((prev) => prev.filter((item) => item.id !== obj.id));
  //   } else {
  //     const { data } = await.axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/favorities', obj);
  //     setFavorites((prev) => [...prev, obj]);
  //   }
  // };
  //----END OF FAVORITES




  //передаем id в метода onRemoveFromDrawer для удаления
  const onRemoveFromDrawer = (id) => {
    axios.delete(`https://622072c8ce99a7de1959cf52.mockapi.io/cartInDrawer/${id}`);
    setDrawerItems((prev) => prev.filter((drawerItems) => drawerItems.id !== id));
  };
  //----END OF DRAWER
  //----END OF BACKEND

  
  // METHOD for Favorite adding
  // const onClickFavorite = () => {
  //   onFavorites({imageUrl, title, price});
  //   setIsFavorite(!isFavorite);
  // }

  // METHOD for <Menu />
  const onChangeCategor = (id) => {
    console.log(id)
  };

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ items, setItems, drawerItems, setDrawerItems, onAddToFavories, searchValue, setSearchValue, favorites, setFavorites }}>
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

          {/* <Route path='/favorites' element={<Favorites />} /> */}

          <Route path='*' element={<NoMatchRoute />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App
