import React from "react";
import { useCart } from "../../context/CartContext"; // Import the cart context

// Define the type for a Product
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Apple Watch Series 7 GPS, Aluminium Case",
    price: 599,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_1280.jpg",
    description: "Aluminium case, Starlight Sport band",
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 4",
    price: 249,
    imageUrl:
      "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fitness-focused smartwatch with health features",
  },
  {
    id: 3,
    name: "Fossil Gen 5E Touchscreen Smartwatch",
    price: 179,
    imageUrl:
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Stylish smartwatch with heart rate monitor",
  },
  {
    id: 4,
    name: "Garmin Forerunner 245",
    price: 299,
    imageUrl:
      "https://images.pexels.com/photos/13156410/pexels-photo-13156410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Advanced GPS smartwatch for athletes",
  },
  {
    id: 5,
    name: "Amazfit GTR 3 Pro",
    price: 249,
    imageUrl:
      "https://images.pexels.com/photos/9561297/pexels-photo-9561297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "High-end smartwatch with AMOLED display",
  },
  {
    id: 6,
    name: "Amazfit GTR 3 Pro",
    price: 249,
    imageUrl:
      "https://images.pexels.com/photos/9561297/pexels-photo-9561297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "High-end smartwatch with AMOLED display",
  },
  {
    id: 7,
    name: "Amazfit GTR 3 Pro",
    price: 249,
    imageUrl:
      "https://images.pexels.com/photos/9561297/pexels-photo-9561297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "High-end smartwatch with AMOLED display",
  },
];

const ProductList: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useCart(); // Use cart context

  // Check if a product is in the cart
  const isInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Product List</h1>

      {/* Grid layout for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="p-8 rounded-t-lg"
              src={product.imageUrl}
              alt={product.name}
            />

            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  Rs.{product.price}
                </span>
                {isInCart(product.id) ? (
                  <button
                    onClick={() => removeFromCart(product.id)} // Remove product from cart
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(product)} // Add product to cart
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
