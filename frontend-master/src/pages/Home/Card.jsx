import React, { useState } from "react";
import star from "../../assets/Icons/Star/Main.png";
import cart from "../../assets/Icons/Cart/Main2.png";
import { Link } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";

const Card = ({ prod, onAddToCart }) => {
  const maxItems = 6;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product); // Call the callback function passed from the parent
    handleCloseModal();
  };
  console.log(prod);
  return (
    <div className="flex justify-center py-8">
      <div className="hidden xl:grid grid-cols-5 gap-x-14 gap-y-8">
        {prod.map((item) => (
          <div className="border w-[240px] rounded">
            <div className="py-2 flex justify-between items-center">
              <img src={item.cap} alt="" className="w-[130px]" />
              <img src={star} alt="" className="mx-2" />
            </div>
            <div className="text-center flex justify-center">
              <img src={item.img} alt="" />
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
              <div className="block">
                {/* <button
                  className="productDetail bg-[#5661CB] text-[#fff] text-[14px] py-2 w-full rounded-sm"
                  onClick={() => handleAddToCart(item)}
                >
                  Добавить в корзину
                </button> */}
                <button
                  className="productDetail bg-[#5661CB] text-[#fff] text-[14px] py-2 w-full rounded-sm"
                  onClick={() => handleOpenModal(item)}
                >
                  Product Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ItemDetail
        product={selectedProduct}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />

      <div className="grid xl:hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {prod.slice(0, maxItems).map((item) => (
          <div className="sm:border">
            <div className="text-center flex justify-center">
              <img src={item.img} alt="" />
            </div>
            <div className="w-full px-2 my-3">
              <div className="text-[14px] font-semibold">{item.title}</div>
              <div className="text-[10px] flex underline">
                <a href="#">бесплатная доставка</a>
              </div>
              <div className="flex items-end py-2">
                <div className="text-[16px] font-bold">{item.price}</div>
                <div className="flex text-[12px] mx-2 py-1 items-end">
                  ₽<div className="px-1">/ шт</div>
                </div>
              </div>
              <a className="addToCart bg-[#5661CB] text-[#fff] text-[14px] py-2 px-4 rounded-sm">
                Купить в 1 клик
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
