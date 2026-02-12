import { useId, type Dispatch, type FC, type SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import styles from './add-product-form.module.css';
import { useAppDispatch } from '../../../../../shared/store/hooks';
import { addProduct } from '../../../../../entites/product/store/slice';
import { Input } from '../../../../../shared/ui/input/input';

type ProductFormInputs = {
    name: string;
    price: number;
    vendor: string;
    sku: string;
};

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setToastMessage: Dispatch<SetStateAction<string>>;
};

export const AddProductForm: FC<Props> = ({ isOpen, setIsOpen, setToastMessage }) => {
    const dispatch = useAppDispatch();
    const id = useId();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductFormInputs>({
        defaultValues: {
            name: '',
            price: 0,
            vendor: '',
            sku: '',
        },
    });

    const onSubmit = (data: ProductFormInputs) => {
        setToastMessage(`Товар "${data.name}" успешно добавлен!`);
        reset();
        setIsOpen(false);
        dispatch(
            addProduct({
                id: Number(id),
                brand: data.vendor,
                price: data.price,
                category: 'тест',
                rating: 0,
                sku: data.sku,
                title: data.name,
            }),
        );
        setTimeout(() => setToastMessage(''), 3000);
    };

    return (
        <>
            {isOpen &&
                createPortal(
                    <div className={styles.modalOverlay}>
                        <div className={styles.modal}>
                            <h2 className={styles.title}>Добавить товар</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                                <Input
                                    label
                                    id="name"
                                    textLabel={'Наименование продукта:'}
                                    {...register('name', { required: 'Обязательное поле' })}
                                />
                                {errors.name && (
                                    <span className={styles.error}>{errors.name.message}</span>
                                )}

                                <Input
                                    label
                                    id="price"
                                    type="number"
                                    textLabel={'Цена:'}
                                    {...register('price', {
                                        required: 'Обязательное поле',
                                        min: 0,
                                    })}
                                />
                                {errors.price && (
                                    <span className={styles.error}>{errors.price.message}</span>
                                )}

                                <Input
                                    label
                                    id="vendor"
                                    type="text"
                                    textLabel={'Вендор:'}
                                    {...register('vendor', { required: 'Обязательное поле' })}
                                />
                                {errors.vendor && (
                                    <span className={styles.error}>{errors.vendor.message}</span>
                                )}

                                <Input
                                    label
                                    id="sku"
                                    type="text"
                                    textLabel={'Артикул:'}
                                    {...register('sku', { required: 'Обязательное поле' })}
                                />
                                {errors.sku && (
                                    <span className={styles.error}>{errors.sku.message}</span>
                                )}

                                <div className={styles.actions}>
                                    <button type="submit">Сохранить</button>
                                    <button type="button" onClick={() => setIsOpen(false)}>
                                        Отмена
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
};
