import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
    children: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

    if (token) {
        return <Navigate to="/products" replace />;
    }

    return <>{children}</>;
};
