import { useEffect } from 'react';
import styles from './app.module.css';
import { ProductsPage } from './pages/products/products-page';
import { useAppDispatch } from './shared/store/hooks';
import { fetchProducts } from './entites/product/store/thunks/fetch-products';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <ProductsPage />
        </div>
    );
}

export default App;
