import type { FC, ReactNode } from 'react';
import styles from './auth-layout.module.css';

type AuthLayoutProps = {
    children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return <main className={styles.container}>{children}</main>;
};
