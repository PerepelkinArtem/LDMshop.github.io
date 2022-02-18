import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

const arr = [
  { title: 'SKODA OCTAVIA A5 2011 1,6 BSE MT', price: 40000, imageUrl: '/img/auto/5.jpg' },
  { title: 'VW JETTA 6 2011 1.4 DSG', price: 20000, imageUrl: '/img/auto/2.jpg' },
  { title: 'VW POLO 1.6MPI AT', price: 5000, imageUrl: '/img/auto/3.jpg' },
  { title: 'VW PASSAT B6 2008 1,8 BZB AT', price: 50000, imageUrl: '/img/auto/4.jpg' },
  { title: 'VW JETTA 6 2014 1.4 DSG7', price: 10000, imageUrl: '/img/auto/1.jpg' },
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
