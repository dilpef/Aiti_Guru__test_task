import styles from './input-search.module.css';

import type { FC, InputHTMLAttributes, ReactNode } from 'react';

export const InputSearch: FC<
    InputHTMLAttributes<HTMLInputElement> & {
        Icon?: ReactNode;
    }
> = ({ Icon, ...props }) => {
    return (
        <div className={styles.container}>
            <button type="button" aria-label="Найти товар" className={styles.icon}>
                {Icon}
            </button>
            <input className={styles.input} {...props} />
        </div>
    );
};
