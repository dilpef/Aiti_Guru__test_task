export const saveUser = (token: string, id: number) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('id', String(id));
};

export const saveSession = (token: string, id: number) => {
    sessionStorage.setItem('authToken', token);
    sessionStorage.setItem('id', String(id));
};

export const getAuthData = (): { token: string | null; id: number | null } | null => {
    const token = localStorage.getItem('authToken');
    const id = Number(localStorage.getItem('id'));

    if (!token || !id) {
        return null;
    }

    return { token, id };
};

export const clearAuthData = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('id');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('id');
};
