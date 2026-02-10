import styles from './input.module.css';

import type { FC, InputHTMLAttributes, ReactNode } from 'react';

export const Input: FC<
    InputHTMLAttributes<HTMLInputElement> & {
        label?: boolean;
        textLabel?: string;
        leftIcon?: ReactNode;
        rightIcon?: ReactNode;
    }
> = ({ label, textLabel, leftIcon, rightIcon, ...props }) => {
    return (
        <div className={styles.container}>
            {label && (
                <label htmlFor={props.id} className={styles.label}>
                    {textLabel}
                </label>
            )}
            {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
            <input className={styles.input} {...props} />
            {rightIcon && (
                <span className={styles.rightIcon}>
                    {' '}
                    <span className={styles.iconWrapper}>{rightIcon}</span>
                </span>
            )}
        </div>
    );
};
