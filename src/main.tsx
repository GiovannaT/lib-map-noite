import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AddBook from './pages/addbook';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tomate",
    element: <div>Hello world!</div>,
  },
  {
    path: "/payment",
    element: <div>Hello world!</div>,
  },
  {
    path: "/search",
    element: <div>Hello world!</div>,
  },
  {
    path: "/addbook",
    element: <AddBook/>
  },
]);


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element.");
}