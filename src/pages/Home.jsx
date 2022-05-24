import React from 'react';
import Card from '../components/Card';



function Home(items, searchValue, setSearchValue, onAddToDrawer, onAddToFavories, onChangeSearchInput) {
  return (
    
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
    
    {/* <div className="content-card">
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
    </div> */}
  </div>
  )
}



export default Home;