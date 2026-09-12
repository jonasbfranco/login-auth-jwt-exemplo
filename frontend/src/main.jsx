import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './Login';
import Home from './Home';

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/login", element: <Login />},
  {path: "/cadastrar", element: <p>Rota de cadastro</p>},
  {path: "*", element: <p>Rota não encontrada</p>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
