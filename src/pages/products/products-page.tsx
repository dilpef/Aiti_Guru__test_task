import { Content } from './components/content/content';
import { Header } from './components/header/header';
import { ProductsPageLayout } from './components/products-page-layout/products-page-layout';

export const ProductsPage = () => {
    return (
        <ProductsPageLayout>
            <Header />
            <Content />
        </ProductsPageLayout>
    );
};
