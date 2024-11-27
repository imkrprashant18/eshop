import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Cart } from "./components";
import { CartProvider } from "./context/CartContext";

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
