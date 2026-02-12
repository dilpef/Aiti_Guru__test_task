export type Products = {
    id: number;
    title: string;
    brand: string;
    category: string;
    price: number;
    rating: number;
    sku: string;
};

export type ProductsState = {
    items: Products[] | [];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string;
    sort: 'asc' | 'desc';
};

export type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refreshToken: string;
};
