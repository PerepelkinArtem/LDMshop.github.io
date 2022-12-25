import React from 'react'
import styles from './Menu.module.scss'
import { useSelector } from 'react-redux'


function Menu({ items, onClickCategory }) {

  const activeItem = useSelector((state) => state.filter.activeItem)

  return (
    < div className={styles.categories} >
      <ul>
        {/* <li className={activeItem === null ? styles.active : ''}
          onClick={() => onSelectItem(null)}>Все</li> */}
        {items.map((name, index) => (
          <li
            className={activeItem === index ? styles.active : ''}
            // className={styles.active} active работает
            onClick={() => onClickCategory(index)}
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