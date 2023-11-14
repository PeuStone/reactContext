import { UsuarioProvider } from 'common/context/Usuario';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {

    return (
        <BrowserRouter>
            <UsuarioProvider>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Login />
                        }

                    />
                    <Route path='/feira' element={<Feira />} />
                    <Route path='/carrinho' element={<Carrinho />} />
                </Routes>
            </UsuarioProvider>
        </BrowserRouter>
    )
}

export default Router