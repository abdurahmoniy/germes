import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import { updateCartItem, removeFromCart } from './cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleIncrement = (index) => {
    dispatch(updateCartItem(index, cartItems[index].counterValue + 1));
  };
  
  const handleDecrement = (index) => {
    dispatch(updateCartItem(index, cartItems[index].counterValue > 0 ? cartItems[index].counterValue - 1 : 0));
  };
  
  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      dispatch(updateCartItem(index, Number(value)));
    }
  };

  const calculateTotalPrice = (item) => {
    return (item.price * item.counterValue).toFixed(2);
  };

  return (
    <div>
      <TopBar />
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          <div className="text-[40px] font-semibold py-8">Корзина</div>
          <div className="text-[20px]">Кирпичи</div>
          <div className="block py-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border flex w-[70%] rounded items-center py-8 my-4"
              >
                {/* Rendering image, title, and price */}
                <div className="w-[15%] h-full">
                  <div className="text-center flex justify-center">
                    {item.img ? (
                      <img src={item.img} alt="" />
                    ) : (
                      <div>Image not available</div>
                    )}
                  </div>
                </div>
                <div className="w-[30%] h-full">
                  <div className="text-[14px] font-semibold">{item.title}</div>
                  <div className="text-[12px] py-1">
                    {item.desc1} <br />
                    {item.desc2}
                  </div>
                </div>
                <div className="w-[20%] h-full">
                  <div className="counter border flex px-2 w-[100px] rounded justify-between mx-auto">
                    <div className="" onClick={() => handleDecrement(index)}>
                      -
                    </div>
                    <input
                      value={item.counterValue}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      className="w-16 text-center"
                    />
                    <div className="" onClick={() => handleIncrement(index)}>
                      +
                    </div>
                  </div>
                </div>
                <div className="w-[20%] h-full flex justify-center">
                  <div className="flex items-end py-2">
                    <div className="text-[16px] font-bold">
                      {calculateTotalPrice(item)}
                    </div>
                    <div className="flex text-[12px] mx-2 py-1 items-end">
                      ₽
                    </div>
                  </div>
                </div>
                <div className="w-[15%] h-full flex justify-center">
                  <i className="fa fa-star mx-3" aria-hidden="true"></i>
                  <i className="fa-solid fa-trash" onClick={() => handleRemoveFromCart(index)}></i>
                </div>
              </div>
            ))}
          </div>
          <Link to="/payment">
            <button
              // onClick={handleUpdateCart} // Remove this line
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded"
            >
              Proceed to Payment
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
