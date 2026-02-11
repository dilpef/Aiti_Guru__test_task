import { configureStore } from '@reduxjs/toolkit';

import { productReducer } from './entites/product/store/slice';

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
});
