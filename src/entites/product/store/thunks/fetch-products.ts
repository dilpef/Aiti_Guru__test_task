import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Products } from '../../../../shared/types/product';
import { errorHandling } from '../../../../shared/lib/error-handling';

export const fetchProducts = createAsyncThunk<Products[], void, { rejectValue: string }>(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=30');
            const data = await response.json();
            return data.products;
        } catch (error) {
            return rejectWithValue(errorHandling({ error }));
        }
    },
);
