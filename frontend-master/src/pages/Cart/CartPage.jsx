import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cartItems", cartItems);
  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <div className="flex">
        {cartItems.map((item, index) => (
          <div key={index} className="border w-[240px] rounded">
            <div className="text-center flex justify-center">
              {item.img ? (
                <img src={item.img} alt="" />
              ) : (
                <div>Image not available</div>
              )}
            </div>
            <div className="w-full px-2 my-3">
              <div className="text-[14px] font-semibold">{item.title}</div>
              <div className="text-[12px] py-1">
                {item.desc1} <br />
                {item.desc2}
              </div>
              <div className="text-[10px] flex underline">
                <a href="#">бесплатная доставка</a>
                <a href="#" className="ml-6 text-green-500">
                  в наличии
                </a>
              </div>
              <div className="flex items-end py-2">
                <div className="text-[16px] font-bold">{item.price}</div>
                <div className="flex text-[12px] mx-2 py-1 items-end">
                  ₽<div className="px-1">/ шт</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/payment">
        <button className="py-2 px-4 mt-4 bg-blue-500 text-white rounded">
          Proceed to Payment
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
