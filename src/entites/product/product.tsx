import { Checkbox } from '../../shared/ui/checkbox/checkbox';
import styles from './product.module.css';
import type { Products } from '../../shared/types/product';
import type { FC } from 'react';

export const Product: FC<Products> = ({ id, title, brand, category, price, sku, rating }) => {
    return (
        <tr className={styles.product} key={id}>
            <td className={styles.product_row__info}>
                <Checkbox />
                <div className={styles.product_row__image} />

                <div className={styles.product_row__text}>
                    <h3 className={styles.product_row__title}>{title}</h3>
                    <span className={styles.product_row__category}>{category}</span>
                </div>
            </td>
            {brand ? (
                <td className={styles.table__cell_vendor}>{brand}</td>
            ) : (
                <td className={styles.table__cell_vendor}>Вендор не известен</td>
            )}
            <td className={styles.table__cell}>{sku}</td>
            <td className={styles.table__cell}>
                {rating > 3 ? (
                    <span>
                        <span>{rating}</span> / 5
                    </span>
                ) : (
                    <span>
                        <span className={styles.rating__low}>{rating}</span> / 5
                    </span>
                )}
            </td>
            <td className={styles.price}>
                {price}
                <span className={styles.price__cents}>,00</span>
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
