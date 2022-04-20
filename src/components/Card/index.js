import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({imageUrl, title, price, onPlus}) {
  const [isAdded, setIsAdded] = useState(false); 

  const onClickPlus = () => {
    onPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        {/* <img src="/img/heart-unliked.svg" alt="Unliked" /> */}
      </div>
      <img src={imageUrl} alt="LDM goods" />
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