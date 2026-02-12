import type { FC, InputHTMLAttributes } from 'react';
import styles from './checkbox.module.css';

type CheckboxPropsType = {
    title?: string;
    aria_label?: string;
};

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement> & CheckboxPropsType> = ({
    title,
    ...props
}) => {
    return (
        <label className={styles.checkboxWrapper} htmlFor={props.id}>
            <input type="checkbox" className={styles.checkbox} {...props} />
            <span className={styles.customCheckbox} />
            {title}
        </label>
    );
};
