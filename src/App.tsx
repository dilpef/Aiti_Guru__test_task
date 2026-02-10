import styles from './App.module.css';
import { LoginPage } from './pages/login/LoginPage';

function App() {
    return (
        <div className={styles.container}>
            <LoginPage />
        </div>
    );
}

export default App;
