import { useEffect } from 'react';
import styles from './app.module.css';

import { useAppDispatch } from './shared/store/hooks';
import { fetchProducts } from './entites/product/store/thunks/fetch-products';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/route-config';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
