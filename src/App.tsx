import styles from './app.module.css';
import { ProductsPage } from './pages/products/products-page';

function App() {
    return (
        <div className={styles.container}>
            <ProductsPage />
        </div>
    );
}

export default App;
