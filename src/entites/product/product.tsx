import { Checkbox } from '../../shared/ui/checkbox/checkbox';
import styles from './product.module.css';

export const Product = () => {
    return (
        <tr className={styles.product}>
            <td className={styles.product_row__info}>
                <Checkbox />
                <div className={styles.product_row__image} />

                <div className={styles.product_row__text}>
                    <h3 className={styles.product_row__title}>USB Флэшкарта 16GB</h3>
                    <span className={styles.product_row__category}>Аксессуары</span>
                </div>
            </td>
            <td className={styles.table__cell_vendor}>Samsung</td>
            <td className={styles.table__cell}>RCH45Q1A</td>
            <td className={styles.table__cell}>
                {/* <span className={styles.rating__low}>4.3</span>/5 */}
                <span>4.3</span>/5
            </td>
            <td className={styles.price}>
                48 652<span className={styles.price__cents}>,00</span>
            </td>
            <td>
                <div className={styles.actions}>
                    <button className={styles.actions__add}>
                        <img src="./plus_product_icon.svg" />
                    </button>
                    <button className={styles.actions__more}>
                        <img src="./more_icon.svg" />
                    </button>
                </div>
            </td>
        </tr>
    );
};
