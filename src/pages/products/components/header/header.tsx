import { useEffect, useState, type ChangeEvent } from 'react';
import { useAppDispatch } from '../../../../shared/store/hooks';
import { InputSearch } from '../../../../shared/ui/input-search/input-search';
import styles from './header.module.css';
import { searchProducts } from '../../../../entites/product/store/thunks/search-products';
import { logout } from '../../../../entites/user/store/slice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(searchProducts(value));
        }, 500);

        return () => clearTimeout(timeout);
    }, [dispatch, value]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handlerLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Товары</h1>
            <InputSearch
                placeholder="Найти"
                value={value}
                onChange={handleSearch}
                Icon={<img src="./icon_search.svg" alt="Иконка поиска" />}
            />
            <button
                className={styles.btn_logout}
                type="button"
                onClick={handlerLogout}
                aria-label="Выйти"
            >
                <img src="./logout_icon.svg" className={styles.logout} alt="Выйти из аккаунта" />
            </button>
        </div>
    );
};
export default Header;
