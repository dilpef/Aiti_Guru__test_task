import type { FC, ReactNode } from 'react';
import styles from './header.module.css';

type HeaderProps = {
    children: ReactNode;
};

export const Header: FC<HeaderProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
