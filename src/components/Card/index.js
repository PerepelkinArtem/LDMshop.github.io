import React, { useState } from 'react';
import styles from './Card.module.scss';
// import { SearchContext } from '../App';

function Card({ id, items, cartItems, imageUrl, title, price, onPlus, onFavorite, favorited = false, added = false }) {

  // const { onAddToFavories } = React.useContext(SearchContext);

  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  // for changing of button plus view
  const onClickPlus = () => {
    onPlus({id, imageUrl, title, price})
    setIsAdded(!isAdded);
  }
  // for changing of button favorites view
  const onClickFavorite = () => {
    onFavorite({id, imageUrl, title, price})
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/favorite/favorite.svg' : '/img/favorite/unfavorite.svg'} alt="Unliked" />
      </div>
      <img className={styles.imgGoods} src={imageUrl} alt="LDM goods" />
      <p>{title}</p>
      <div className={styles.cardStatus}>
        <span>ЦЕНА:</span>
        <b>{price} руб.</b>
        <button className="button" onClick={onClickPlus}>
          <img src={isAdded ? "/img/btn-added.svg" : "/img/plus.svg"} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card