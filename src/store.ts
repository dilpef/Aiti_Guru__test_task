import { configureStore } from '@reduxjs/toolkit';

import { productReducer } from './entites/product/store/slice';
import { userReducer } from './entites/user/store/slice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        auth: userReducer,
    },
});
