import React from 'react';
import Card from '../components/Card'

function Favorites(items) {
  return (
    <div className="content-card">
      <h3>Избранное</h3>
      <div>
        {items.map((item, index) => (
          <Card
            key={index}
            title={items.title}
            price={items.price}
            imageUrl={items.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites;