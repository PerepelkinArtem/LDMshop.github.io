import React, {useState} from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Menu from '../components/Menu';
import SkeletonCard from '../components/Card/SkeletonCard';

function Home () {

  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true); // для SkeletonCard
  const [favorites, setFavorites] = useState([]); // массив для избранного


  //----BEGINNING OF BACKEND REQUEST------------------------------------------------
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
    // Избранное: 
    axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/favorities').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  //----BEGINNING OF FAVORITES-------------------------------------------------
  const onAddToFavories = (obj) => {
    //   // передай по сслыке объект, к. возвращает метод onAddToFavorities.
    axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/favorities', obj);
    setFavorites((prev) => [...prev, obj]);
  };
  //----END OF FAVORITES-----------------------------------------------------

  //----END OF BACKEND REQUEST-------------------------------------------------------

  // METHOD for search feature
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <>
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
                  // onPlus={(obj) => onAddToDrawer(obj)}
                />
              ))
          }
        </div>
      </div>
    </>
  )
}

export default Home