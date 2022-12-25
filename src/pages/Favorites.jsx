import React from 'react';
import { SearchContext } from '../App';

import Card from '../components/Card'

function Favorites() {

  const { favorites, onAddToFavories } = React.useContext(SearchContext);

console.log(favorites)

  return (
    <div className="content-card">
      <h3>Избранное</h3>
      <div>
        {favorites.map((item, index) => (
          <Card
            key={index}
            // title={item.title}
            // price={item.price}
            // imageUrl={item.imageUrl}
            favorited={true}
            onFavorite={onAddToFavories}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites;