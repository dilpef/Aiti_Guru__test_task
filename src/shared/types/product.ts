export type Products = {
    id: number; // уникальный id
    title: string; // название товара
    brand: string; // описание
    category: string; // категория
    price: number; // цена
    rating: number; // средний рейтинг
    sku: string; // артикул
};

export type ProductsState = {
    items: Products[] | [];
    isLoading: boolean;
    error: null | string;
    sort: 'asc' | 'desc';
};
