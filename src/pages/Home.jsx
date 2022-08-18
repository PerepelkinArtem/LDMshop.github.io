import React from 'react'
// import { useSelector } from 'react-redux'
import { SearchContext } from '../App';

import Card from '../components/Card'
import Menu from '../components/Menu'
import Search from '../components/Search'
import SkeletonCard from '../components/Card/SkeletonCard'

function Home() {

  const { items, isLoading, searchValue, drawerItems, onAddToDrawer, onAddToFavories, activeItem, setActiveItem, onClickCategory } = React.useContext(SearchContext);

  return (
    <>
      <Menu
        items={['Все', 'Косметика', 'Термогружки', 'Ланч-боксы', 'Свечи', 'Бутылки']}
        onChangeMenu={(id) => alert(id)}
        // onClickCategory={(i) => setActiveItem(i)} для useState, ниже RT
        onClickCategory={onClickCategory}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div className="content">
        <Search />
      </div>
      <div className="content-card">
        {/* Логика загрузки скелетона: */}
        {isLoading
          ? [...new Array(9)].map((_, index) => <SkeletonCard key={index} />)
          : items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                // title={item.title}
                // price={item.price}
                // imageUrl={item.imageUrl}
                added={drawerItems.some((obj) => Number(obj.id) === Number(item.id))}
                onFavorite={(obj) => onAddToFavories(obj)}
                onPlus={(obj) => onAddToDrawer(obj)}
                {...item}
              />
            ))
        }
      </div>
    </>
  )
}

export default Home