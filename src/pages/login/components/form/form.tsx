import { useState } from 'react';
import { Input } from '../../../../shared/ui/input/input';
import type { FC } from 'react';
import styles from './foms.module.css';

export const Form: FC = () => {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return (
        <form className={styles.auth_form}>
            <div className={styles.auth_form_fields}>
                <Input
                    label={true}
                    name="login"
                    textLabel={'Логин'}
                    onChange={(e) => setLoginValue(e.target.value)}
                    value={loginValue}
                    leftIcon={<img src="./login_icon.svg" alt="login icon" />}
                    rightIcon={
                        <button type="button" aria-label="Очистить поле">
                            <img src="./cancel_icon.svg" />
                        </button>
                    }
                />

                {/*TO DO: {loginError && <span className={styles.error}>{loginError}</span>} */}
                <Input
                    label={true}
                    name="password"
                    textLabel={'Пароль'}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    leftIcon={<img src="./lock_icon.svg" alt="lock icon" />}
                    rightIcon={
                        <button type="button" aria-label="Показать пароль">
                            <img src="./eye_icon.svg" />
                        </button>
                    }
                />
                {/*TO DO: {passError && <span className={styles.error}>{passError}</span>} */}
            </div>

            <label className={styles.checkboxWrapper}>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.customCheckbox} />
                Запомнить данные
            </label>
            <button className={styles.button} type="submit">
                Войти
            </button>

            <div className={styles.auth_divider}>
                <p className={styles.auth_divider_text}>или</p>
            </div>
            <div>
                <span className={styles.signup_link_text}>Нет аккаунта?</span>
                <a className={styles.signup_link} href="/">
                    Создать
                </a>
            </div>
        </form>
    );
};
