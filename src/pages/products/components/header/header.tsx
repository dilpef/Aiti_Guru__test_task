import { InputSearch } from '../../../../shared/ui/input-search/input-search';
import styles from './header.module.css';

export const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Товары</h1>
            <InputSearch placeholder="Найти" Icon={<img src="./icon_search.svg" />} />
        </div>
    );
};
