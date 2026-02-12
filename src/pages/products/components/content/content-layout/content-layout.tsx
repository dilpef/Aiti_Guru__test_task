import type { FC, ReactNode } from 'react';
import styles from './content-layout.module.css';

type ContentLayoutProps = {
    children: ReactNode;
};
export const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
    return <section className={styles.container}>{children}</section>;
};
