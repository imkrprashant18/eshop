import React from "react";
import { useCart } from "../../context/CartContext";
import RootLayout from "../Layouts/layout";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <RootLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    className="w-20 h-20 rounded-lg object-cover"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <div className="flex-1 ml-4">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {item.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-300 rounded-md "
                      >
                        -
                      </button>
                      <span className="mx-2 text-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-300 rounded-md "
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    Rs.{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <h3 className="text-2xl font-bold text-gray-900 ">
                Total:Rs.{totalPrice}
              </h3>
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default Cart;
