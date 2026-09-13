import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import CorporateLayout from './layouts/CorporateLayout';
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  { path: "/", 
    element: <CorporateLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "categoria",
        element: <p>Página de Categoria</p>
      }
    ]
  },
  {path: "/login", element: <Login />},
  {path: "/cadastrar", element: <p>Rota de cadastro</p>},
  {path: "*", element: <p>Rota não encontrada</p>}
  // <Route path="*" element={<Navigate to="/" replace />} />
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
