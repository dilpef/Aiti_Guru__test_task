import { useForm } from 'react-hook-form';
import { Input } from '../../../../shared/ui/input/input';
import { useState, type FC } from 'react';
import styles from './foms.module.css';
import { useAppDispatch } from '../../../../shared/store/hooks';
import { userAuthorization } from '../../../../entites/user/store/thunks/auth';

type LoginFormInputs = {
    email: string;
    password: string;
    rememberMe: boolean;
};
export const Form: FC = () => {
    const dispatch = useAppDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const onSubmit = (data: LoginFormInputs) => {
        dispatch(
            userAuthorization({
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe,
            }),
        );
    };

    return (
        <form className={styles.auth_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.auth_form_fields}>
                <Input
                    label
                    id="email"
                    textLabel="Логин"
                    {...register('email', { required: 'Поле обязательно' })}
                    leftIcon={<img src="./login_icon.svg" alt="login icon" />}
                    rightIcon={
                        <button
                            type="button"
                            aria-label="Очистить поле"
                            onClick={() => {
                                setValue('email', '');
                            }}
                        >
                            <img src="./cancel_icon.svg" />
                        </button>
                    }
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}

                <Input
                    label
                    id="password"
                    textLabel="Пароль"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: 'Поле обязательно' })}
                    leftIcon={<img src="./lock_icon.svg" alt="lock icon" />}
                    rightIcon={
                        <button
                            type="button"
                            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            <img src="./eye_icon.svg" />
                        </button>
                    }
                />
                {errors.password && <span className={styles.error}>{errors.password.message}</span>}
            </div>

            <label className={styles.checkboxWrapper}>
                <input type="checkbox" className={styles.checkbox} {...register('rememberMe')} />
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
