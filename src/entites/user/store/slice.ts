import { createSlice } from '@reduxjs/toolkit';
import { createMatcher } from '../../../shared/lib/add-matcher';
import { userAuthorization } from './thunks/auth';
import { clearAuthData, getAuthData, saveSession, saveUser } from '../../../shared/lib/auth';

export type UserType = {
    token: string | null;
    id: number | null;
    isAuthenticated: boolean;
    rememberMe: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: UserType = {
    status: 'idle',
    isAuthenticated: false,
    rememberMe: false,
    error: null,
    token: null,
    id: null,
};

const currentUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorizationCheck: (state) => {
            const authData = getAuthData();

            if (authData) {
                const { token, id } = authData;
                state.token = token;
                state.id = id;
                state.status = 'idle';
                state.error = null;
                state.rememberMe = true;
                state.isAuthenticated = true;
            }
        },
        logout: (state) => {
            state.token = null;
            state.id = null;
            state.status = 'idle';
            state.error = null;

            clearAuthData();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userAuthorization.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(userAuthorization.fulfilled, (state, action) => {
                const id = action.payload.id;
                const token = action.payload.token;

                state.status = 'succeeded';
                state.token = token;
                state.id = id;
                state.error = null;
                state.rememberMe = action.payload.rememberMe;

                if (state.rememberMe) {
                    saveUser(token, id);
                } else {
                    saveSession(token, id);
                }
            })

            .addMatcher(createMatcher('user/'), (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});
export const { logout } = currentUserSlice.actions;
export const userReducer = currentUserSlice.reducer;
