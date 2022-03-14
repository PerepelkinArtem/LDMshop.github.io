//пиши корзину с display: none;
import styles from './Drawer.module.scss';

function Drawer({ onClose, items = [] }) {
    return (
        <div className={styles.drawer}>
            <h3>КОРЗИНА</h3>
            <a onClick={onClose} href="#" class={styles.close}></a>
            <div className={styles.goods}>
                {items.map((obj) => (
                    <div>
                        <img src={obj.imageUrl} alt="auto" />
                        <p>{obj.title}</p>
                        <div className={styles.cardInfo}>
                            <span>ЦЕНА:</span>
                            <b>{obj.price}</b>
                            <button className={styles.removeBtn}>
                                <img src="/img/drawer/X.svg" alt="plus" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}
export default Drawer