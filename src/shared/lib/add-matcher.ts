import type { Action, PayloadAction } from '@reduxjs/toolkit';

export const createMatcher = (path: string) => {
    return (action: Action): action is PayloadAction<string> => {
        return (
            action.type.startsWith(path) &&
            action.type.endsWith('rejected') &&
            'payload' in action &&
            typeof action.payload === 'string'
        );
    };
};
