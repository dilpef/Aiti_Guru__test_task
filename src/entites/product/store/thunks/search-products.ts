import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandling } from '../../../../shared/lib/error-handling';

export const searchProducts = createAsyncThunk(
    'products/search',
    async (query: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const data = await response.json();
            return data.products;
        } catch (error) {
            return rejectWithValue(errorHandling({ error }));
        }
    },
);
