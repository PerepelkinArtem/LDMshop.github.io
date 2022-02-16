import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card(propc) {
  const [isAdded, setIsAdded] = useState(false); // по умолчанию false

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img src={propc.imageUrl} alt="auto" />
      <p>{propc.title}</p>
      <div className="card-status">
        <span>ЦЕНА:</span>
        <b>{propc.price} руб.</b>
        <button className="button" onClick={onClickPlus}>
          <img src={isAdded ? "/img/btn-added.svg" :"/img/plus.svg"} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card