import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandling } from '../../../../shared/lib/error-handling';

export const userAuthorization = createAsyncThunk<
    { token: string; id: number; rememberMe: boolean },
    { email: string; password: string; rememberMe: boolean },
    { rejectValue: string }
>(
    'user/userAuthorization',

    async (formData, { rejectWithValue }) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.email,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                return rejectWithValue('Authorization failed');
            }
            const result = await response.json();

            if (!result.accessToken || !result.id) {
                return rejectWithValue('Invalid server response');
            }

            return { token: result.accessToken, id: result.id, rememberMe: formData.rememberMe };
        } catch (error) {
            return rejectWithValue(errorHandling({ error }));
        }
    },
);
