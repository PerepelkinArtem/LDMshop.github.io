import React from 'react';
import styles from './Menu.module.scss';

function Menu({ items, onClick, onChangeMenu, activeItem, setActiveItem }) {

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className={styles.categories}>
      <ul>
        <li className={activeItem === null ? styles.active : ''}
          onClick={() => onSelectItem(null)}>Все</li>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? styles.active : ''}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div >
  );
}

export default Menu;

// () => setActiveItem(index)