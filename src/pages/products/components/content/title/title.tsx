import { useState, type FC } from 'react';
import styles from './title.module.css';
import { sortByRating } from '../../../../../entites/product/store/slice';
import { selectSort } from '../../../../../entites/product/store/selectors';
import { fetchProducts } from '../../../../../entites/product/store/thunks/fetch-products';
import { useAppDispatch, useAppSelector } from '../../../../../shared/store/hooks';
import { AddProductForm } from '../add-product-form/add-product-form';

export const Title: FC = () => {
    const dispatch = useAppDispatch();
    const sort = useAppSelector(selectSort);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleSort = () => {
        if (sort === 'asc') {
            dispatch(sortByRating('desc'));
        } else {
            dispatch(sortByRating('asc'));
        }
    };
    return (
        <header className={styles.container}>
            <h2 className={styles.title}>Все позиции</h2>
            <div className={styles.btn_wrapp}>
                <button
                    type="button"
                    className={styles.btn_sort}
                    aria-label="Отсортировать товары"
                    onClick={handleSort}
                >
                    <img src="./sort.svg" alt="Сортировка товаров" />
                </button>
                <button
                    type="button"
                    className={styles.btn_refetch}
                    aria-label="Обновить товары"
                    onClick={() => dispatch(fetchProducts())}
                >
                    <img src="./refetch_icon.svg" alt="Обновить список товаров" />
                </button>
                <button
                    type="button"
                    className={styles.btn_add}
                    aria-label="Добавить товар"
                    onClick={() => setIsAddOpen(true)}
                >
                    <img src="./plus_icon.svg" alt="Добавить новый товар" />
                    Добавить
                </button>
            </div>
            {isAddOpen && (
                <AddProductForm
                    isOpen={isAddOpen}
                    setIsOpen={setIsAddOpen}
                    setToastMessage={setToastMessage}
                />
            )}
            {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
        </header>
    );
};
