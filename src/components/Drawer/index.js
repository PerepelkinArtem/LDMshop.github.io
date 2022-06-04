//пиши корзину с display: none;
import React from 'react';
import styles from './Drawer.module.scss';

function Drawer({ onClose, onRemove, items = [] }) {

  return (
    <div className={styles.drawer}>
      <h3>КОРЗИНА</h3>
      <a onClick={onClose} href="#" class={styles.close}></a>

      {/* Выбор отображение корзины: пустая или с товарами*/}
      {items.length > 0 ? (
        <div>
          <div>
            {items.map((obj) => (
              <div key={obj.id} className={styles.goods}>
                <img className={styles.drawerImg} src={obj.imageUrl} alt="product" />
                <p>{obj.title}</p>
                <div className={styles.cardInfo}>
                  <span>ЦЕНА:</span>
                  <b>{obj.price} руб.</b>
                  <button onClick={() => onRemove(obj.id)}>
                    <div class={styles.clbtn2}>
                      <div>
                        <div class={styles.leftright}></div>
                        <div class={styles.rightleft}></div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b> 1 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1 руб. </b>
              </li>
            </ul>
            <button>
              Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.drawerEmty}>
          <img
            width="120px"
            heigth="120px"
            src="/img/drawer/drawer-emty.svg"
            alt="Корзина пустая"
          />
          <h2>Корзина пустая</h2>
          <p>Добавьте хотя бы один товар, чтобы сделать заказ.</p>
          <button onClick={onClose}>
            <img src="/img/drawer/drawer-return.svg" alt="Кнопка возврата" />
          </button>
        </div>
      )}
    </div>
  );
}
export default Drawer;
