import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { SearchContext } from '../App';

import Card from '../components/Card'
import Menu from '../components/Menu'
import Search from '../components/Search'
import SkeletonCard from '../components/Card/SkeletonCard'

function Home(onAddToFavories ) {

  // const categoryId = useSelector((state) => state.filter.categoryId);

  // console.log('redux state', categoryId);

  // const setCategoryID = () => { };



  const [isLoading, setIsLoading] = React.useState(true); // для SkeletonCard

  const { items, setItems, searchValue, drawerItems, setDrawerItems } = React.useContext(SearchContext);


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

  }, []);


 //----BEGINNING OF DRAWER
  // Adding the cards in Drawer - METHOD вызывается при нажатии на плюс
  const onAddToDrawer = (obj) => {
  //   // передай по сслыке объект, к. возвращает метод onAddToDrawer.
  //   // axios.post('https://622072c8ce99a7de1959cf52.mockapi.io/cartInDrawer', obj);
    setDrawerItems([...drawerItems, obj]);
    // setDrawerItems((prev) => [...prev, obj]);
  };

console.log(drawerItems);

  const onChangeMenu = (id) => {
    console.log(id);
  }

  return (
    <>
      <Menu
        onClick={() => console.log(items)}
        items={['Косметика', 'Термогружки', 'Ланч-боксы', 'Свечи', 'Бутылки']}
        onChangeMenu={onChangeMenu}
      />
      <div className="content">
        <Search />
      </div>
      <div className="content-card">
        {/* Логика загрузки скелетона: */}
        {isLoading
          ? [... new Array(9)].map((_, index) => <SkeletonCard key={index} />)
          : items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Нажали на избранное')}
                onPlus={(obj) => onAddToDrawer(obj)}
              />
            ))
        }
      </div>
    </>
  )
}

export default Home