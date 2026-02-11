import type { FC } from 'react';
import styles from './checkbox.module.css';

type CheckboxPropsType = {
    title?: string;
};

export const Checkbox: FC<CheckboxPropsType> = ({ title }) => {
    return (
        <label className={styles.checkboxWrapper}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.customCheckbox} />
            {title}
        </label>
    );
};
