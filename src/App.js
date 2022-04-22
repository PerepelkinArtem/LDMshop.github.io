import React, { useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Menu from './components/Menu';

// const arr = [
//   { title: 'SKODA OCTAVIA A5 2011 1,6 BSE MT', price: 40000, imageUrl: '/img/auto/5.jpg' },
//   { title: 'VW JETTA 6 2011 1.4 DSG', price: 20000, imageUrl: '/img/auto/2.jpg' },
//   { title: 'VW POLO 1.6MPI AT', price: 5000, imageUrl: '/img/auto/3.jpg' },
//   { title: 'VW PASSAT B6 2008 1,8 BZB AT', price: 50000, imageUrl: '/img/auto/4.jpg' },
//   { title: 'VW JETTA 6 2014 1.4 DSG7', price: 10000, imageUrl: '/img/auto/1.jpg' },
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [drawerItems, setDrawerItems] = React.useState([]); // adding to drawer
  const [Favorites, setFavorites] = useState([]); // массив для избранного
  const [searchValue, setSearchValue] = React.useState('');
  const [drawerOpened, setDrawerOpened] = React.useState(false);

  //----BEGINNING OF BACKEND---------------------------------------------------
  React.useEffect(() => {
    // два способа получать данные с бека fetch и axios (популярный)
    // fetch('https://622072c8ce99a7de1959cf52.mockapi.io/items').then(res => {
    //   return res.json();
    // }).then(json => {
    //   setItems(json)
    // });
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/cartInDrawer').then((res) => {
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



  //----BEGINNING OF FAVORITES-------------------------------------------------
  const onAddToFavories = (obj) => {
    //   // передай по сслыке объект, к. возвращает метод onAddToFavorities.
    axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/favorities', obj);
    setFavorites((prev) => [...prev,obj]);
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
          {/* <h3>ВCE АВТОМОБИЛИ</h3> */}
          <h3>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все товары'}</h3>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {/* X button on input of search area */}
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
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorites={(obj) => onAddToFavories(obj)}
                onPlus={(obj) => onAddToDrawer(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App
