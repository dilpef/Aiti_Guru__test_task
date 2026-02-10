import styles from './logo.module.css';

export const Logo = () => {
    return (
        <div className={styles.logoIcon} aria-hidden>
            <img src="/logo_ath.svg" alt="Логотип" />
        </div>
    );
};
