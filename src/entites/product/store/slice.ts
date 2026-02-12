import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './thunks/fetch-products';
import type { Products, ProductsState } from '../../../shared/types/entities';
import { searchProducts } from './thunks/search-products';
import { createMatcher } from '../../../shared/lib/add-matcher';

const initialState: ProductsState = {
    items: [],
    status: 'idle',
    error: null,
    sort: 'asc',
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortByRating: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.sort = action.payload;

            state.items = [...state.items].sort((a, b) => {
                const multiplier = state.sort === 'asc' ? 1 : -1;
                return (a.rating - b.rating) * multiplier;
            });
        },
        addProduct: (state, action: PayloadAction<Products>) => {
            state.items = [...state.items, action.payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';

                const multiplier = state.sort === 'asc' ? 1 : -1;
                state.items = [...action.payload].sort(
                    (a, b) => (a.rating - b.rating) * multiplier,
                );
            })

            .addCase(searchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';

                const multiplier = state.sort === 'asc' ? 1 : -1;
                state.items = [...action.payload].sort(
                    (a, b) => (a.rating - b.rating) * multiplier,
                );
            })
            .addMatcher(createMatcher('products/'), (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});
export const { sortByRating, addProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
