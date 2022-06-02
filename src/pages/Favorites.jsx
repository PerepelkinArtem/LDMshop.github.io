import React from 'react';
import { SearchContext } from '../App';

import Card from '../components/Card'

function Favorites(items) {

  const { favorites, setFavorites } = React.useContext(SearchContext);

  return (
    <div className="content-card">
      <h3>Избранное</h3>
      <div>
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites;