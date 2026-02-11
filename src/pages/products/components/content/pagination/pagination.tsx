import type { Dispatch, FC } from 'react';
import { selectQuantityElements } from '../../../../../entites/product/store/selectors';
import { useAppSelector } from '../../../../../shared/store/hooks';
import styles from './pagination.module.css';

type Props = {
    ITEMS_PER_PAGE: number;
    setCurrentPage: Dispatch<React.SetStateAction<number>>;
    startIndex: number;
    endIndex: number;
    currentPage: number;
};

export const Pagination: FC<Props> = ({
    ITEMS_PER_PAGE,
    setCurrentPage,
    currentPage,
    startIndex,
    endIndex,
}) => {
    const quantity = useAppSelector(selectQuantityElements);
    const totalPages = Math.ceil(quantity / ITEMS_PER_PAGE);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.pagination_info}>
                    <span className={styles.pagination_text}>Показано</span>
                    <span className={styles.pagination_position}>
                        {startIndex}-{endIndex}
                    </span>
                    <span className={styles.pagination_text}>из</span>
                    <span className={styles.pagination_position}>{quantity}</span>
                </div>
                <div className={styles.pagination}>
                    <button
                        className={styles.btn}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <img src="./arrow_left.svg" alt="назад" />
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <div
                            key={index}
                            className={styles.pagination_item}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </div>
                    ))}

                    <button
                        className={styles.btn}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <img src="./arrow_right.svg" alt="далее" />
                    </button>
                </div>
            </div>
        </div>
    );
};
