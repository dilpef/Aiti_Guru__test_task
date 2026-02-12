import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const LoginPage = lazy(() => import('../pages/login/login-page'));
const ProductsPage = lazy(() => import('../pages/products/products-page'));
import { ErrorPage } from '../pages/error/error';
import { PublicRoute } from './public-route';
import { PrivateRoute } from './privat-route';
import { Loader } from '../shared/ui/loader/loader';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loader />}>
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/products',
        element: (
            <Suspense fallback={<Loader />}>
                <PrivateRoute>
                    <ProductsPage />
                </PrivateRoute>
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
]);
