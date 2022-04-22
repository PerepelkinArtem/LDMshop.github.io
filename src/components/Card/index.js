import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({imageUrl, title, price, onPlus, onFavorites}) {
  const [isAdded, setIsAdded] = useState(false); 
  const [isFavorite, setIsFavorite] = useState(false); 

  const onClickPlus = () => {
    onPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorites({imageUrl, title, price});
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
          <img src={isAdded ? "/img/btn-added.svg" :"/img/plus.svg"} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card