import styles from './page-title.module.css';

export const PageTitle = () => {
    return (
        <>
            <h1 className={styles.visually_hidden}>Страница авторизации</h1>
            <img src={'./header_auth.svg'} aria-hidden />
            <p className={styles.description}>Пожалуйста, авторизируйтесь</p>
        </>
    );
};
