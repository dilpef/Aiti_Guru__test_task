import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './thunks/fetch-products';
import type { ProductsState } from '../../../shared/types/product';
import { searchProducts } from './thunks/search-products';

const initialState: ProductsState = {
    items: [],
    isLoading: false,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;

                const multiplier = state.sort === 'asc' ? 1 : -1;
                state.items = [...action.payload].sort(
                    (a, b) => (a.rating - b.rating) * multiplier,
                );
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(searchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.isLoading = false;

                const multiplier = state.sort === 'asc' ? 1 : -1;
                state.items = [...action.payload].sort(
                    (a, b) => (a.rating - b.rating) * multiplier,
                );
            });
    },
});
export const { sortByRating } = productSlice.actions;
export const productReducer = productSlice.reducer;
