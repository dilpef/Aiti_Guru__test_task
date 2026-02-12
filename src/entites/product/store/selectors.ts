import { createSelector } from '@reduxjs/toolkit';
import type { TypeState } from '../../../shared/store/type';

export const selectProducts = createSelector(
    (state: TypeState) => state.products,
    (statsState) => statsState.items,
);
export const selectQuantityElements = createSelector(
    (state: TypeState) => state.products,
    (statsState) => statsState.items.length,
);

export const selectIsLoadingProducts = createSelector(
    (state: TypeState) => state.products,
    (statsState) => statsState.status,
);
export const selectSort = createSelector(
    (state: TypeState) => state.products,
    (statsState) => statsState.sort,
);
