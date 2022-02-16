import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

const arr = [
  { title: 'VW JETTA 6 2014 1.4 DSG7', price: 10000, imageUrl: '/img/auto/1.jpg' },
  { title: 'SKODA Octavia 1.6MPI MT ', price: 20000, imageUrl: '/img/auto/1.jpg' },
  { title: 'SKODA Rapid 1.6MPI MT ', price: 5000, imageUrl: '/img/auto/1.jpg' },
  { title: 'SKODA Karoq 1.6MPI MT ', price: 50000, imageUrl: '/img/auto/1.jpg' },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className='sub-title_content'>
          <h3>ВCE АВТОМОБИЛИ</h3>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="content-card">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
