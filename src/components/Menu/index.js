import React, { useState } from 'react';
import styles from './Menu.module.scss';

function Menu({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState([]);

  return (
    <div className={styles.categories}>
      <ul>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? styles.active : ''}
            onClick={() => setActiveItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
