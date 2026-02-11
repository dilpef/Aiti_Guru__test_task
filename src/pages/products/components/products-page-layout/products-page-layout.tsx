import styles from './products-page-layout.module.css';
import type { FC, ReactNode } from 'react';

type ProductsPageLayoutProps = {
    children: ReactNode;
};

export const ProductsPageLayout: FC<ProductsPageLayoutProps> = ({ children }) => {
    return <main className={styles.container}>{children}</main>;
};
