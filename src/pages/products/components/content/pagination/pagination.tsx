import styles from './pagination.module.css';

export const Pagination = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.pagination_info}>
                    <span className={styles.pagination_text}>Показано</span>
                    <span className={styles.pagination_position}>1-20</span>
                    <span className={styles.pagination_text}>из</span>
                    <span className={styles.pagination_position}>120</span>
                </div>
                <div className={styles.pagination}>
                    <button className={styles.btn}>
                        <img src="./arrow_left.svg" alt="назад" />
                    </button>

                    <div className={styles.pagination_item}>1</div>
                    <div className={styles.pagination_item}>2</div>
                    <div className={styles.pagination_item}>3</div>
                    <div className={styles.pagination_item}>4</div>
                    <div className={styles.pagination_item}>5</div>
                    <button className={styles.btn}>
                        <img src="./arrow_right.svg" alt="далее" />
                    </button>
                </div>
            </div>
        </div>
    );
};
