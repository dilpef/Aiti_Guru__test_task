import { Product } from '../../../../../entites/product/product';
import { Checkbox } from '../../../../../shared/ui/checkbox/checkbox';
import styles from './table.module.css';

export const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th className={styles.table__header_name}>
                        <div>
                            <Checkbox />
                            <span className={styles.table__header_title}>Наименование</span>
                        </div>
                    </th>

                    <th>Вендор</th>
                    <th>Артикул</th>
                    <th>Оценка</th>
                    <th>Цена, ₽</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </tbody>
        </table>
    );
};
