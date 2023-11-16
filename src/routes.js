import { CarrinhoProvider } from 'common/context/Carrinho';
import { UsuarioProvider } from 'common/context/Usuario';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/feira',
            element: <Feira />,
        },
        {
            path: '/carrinho',
            element: <Carrinho />,
        },
    ]);

    return (
        <UsuarioProvider>
            <CarrinhoProvider>
                <RouterProvider router={router} />
            </CarrinhoProvider>
        </UsuarioProvider>
    )
}

export default Router