import type { FC } from 'react';
import { Product } from '../../../../../entites/product/product';
import {
    selectIsLoadingProducts,
    selectProducts,
} from '../../../../../entites/product/store/selectors';
import { useAppSelector } from '../../../../../shared/store/hooks';
import { Checkbox } from '../../../../../shared/ui/checkbox/checkbox';
import styles from './table.module.css';
import { Loader } from '../../../../../shared/ui/loader/loader';

type Props = {
    currentPage: number;
    ITEMS_PER_PAGE: number;
};
export const Table: FC<Props> = ({ currentPage, ITEMS_PER_PAGE }) => {
    const data = useAppSelector(selectProducts);
    const isLoading = useAppSelector(selectIsLoadingProducts);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    if (isLoading) return <Loader />;
    if (!data.length) return <span>Товары не найдены</span>;

    const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    return (
        <table>
            <thead>
                <tr>
                    <th className={styles.table__header_name}>
                        <div>
                            <Checkbox aria-label="Выбрать все товары" id="select-all" />
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
                {currentItems.map(({ id, title, brand, category, price, sku, rating }) => (
                    <Product
                        key={id}
                        title={title}
                        brand={brand}
                        category={category}
                        price={price}
                        sku={sku}
                        rating={rating}
                    />
                ))}
            </tbody>
        </table>
    );
};
