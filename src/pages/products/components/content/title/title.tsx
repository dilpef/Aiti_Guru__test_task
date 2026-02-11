import styles from './title.module.css';

export const Title = () => {
    return (
        <header className={styles.container}>
            <h2 className={styles.title}>Все позиции</h2>
            <div className={styles.btn_wrapp}>
                <button type="button" className={styles.btn_refetch} aria-label="Обновить товары">
                    <img src="./refetch_icon.svg" />
                </button>
                <button type="button" className={styles.btn_add} aria-label="Добавить товар">
                    <img src="./plus_icon.svg" />
                    Добавить
                </button>
            </div>
        </header>
    );
};
