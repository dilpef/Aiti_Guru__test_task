import { AuthLayout } from './components/auth-layout/auth-layout';
import { Form } from './components/form/form';
import { Header } from './components/header/header';
import { Logo } from './components/logo/logo';
import { PageTitle } from './components/page-title/page-title';

const LoginPage = () => {
    return (
        <AuthLayout>
            <Header>
                <Logo />
                <PageTitle />
            </Header>
            <Form />
        </AuthLayout>
    );
};
export default LoginPage;
