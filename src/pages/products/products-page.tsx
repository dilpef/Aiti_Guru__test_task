import { lazy, Suspense } from 'react';

const Content = lazy(() => import('./components/content/content'));
const Header = lazy(() => import('./components/header/header'));
import { ProductsPageLayout } from './components/products-page-layout/products-page-layout';
import { Loader } from '../../shared/ui/loader/loader';

const ProductsPage = () => {
    return (
        <ProductsPageLayout>
            <Header />
            <Suspense fallback={<Loader />}>
                <Content />
            </Suspense>
        </ProductsPageLayout>
    );
};
export default ProductsPage;
