import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../pages/Cart/cartActions";
import TopBar from "./TopBar";
import right from "../assets/Icons/right.png";
import left from "../assets/Icons/left.png";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const products = useSelector((state) => state.products.prod);

  const product = products.find((item) => item.slug === slug);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const sec1 = product.sec.det1;
  const sec2 = product.sec.det2;
  const sec3 = product.sec.det3;
  const sec4 = product.sec.det4;
  const sec5 = product.sec.det5;

  const [currentImage, setCurrentImage] = useState(0);
  const images = [sec5, sec1, sec2, sec3, sec4];

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };
  const handleAngleRightClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleAngleLeftClick = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div className="">
        <TopBar />
      </div>
      <div className="block">
        <div className="text-[25px] font-semibold py-6">{product.title}</div>
        <div className="flex w-full gap-4">
          <div className="border h-[350px] w-[50%]">
            <img src={product.cap} alt="" className="py-4 absolute" />
            <div className="top flex justify-between px-2 items-center py-12">
              <div
                className="fa-4x"
                aria-hidden="true"
                onClick={handleAngleLeftClick}
              >
                <img src={left} alt="" />
              </div>
              <img
                src={images[currentImage]}
                alt={`Product ${currentImage + 1}`}
                className="w-[250px] h-[150px]"
              />
              <div aria-hidden="true" onClick={handleAngleRightClick}>
                <img src={right} alt="" />
              </div>
            </div>
            <div className="bottom flex gap-4 justify-center">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  className={"w-[50px]"}
                />
              ))}
            </div>
          </div>
          <div className="border h-[350px] w-[50%] p-4">
            <div className="flex text-[14px]">
              <div className="mr-1 text-[#7d7d7d]">Производитель: </div>
              <div className="text-[#272727]">{product.char.manufacturer}</div>
            </div>
            <div className="flex text-[14px]">
              <div className="mr-1 text-[#7d7d7d]">Марка прочности: </div>
              <div className="text-[#272727]">{product.char.marc}</div>
            </div>
            <div className="flex text-[14px] text-[#7d7d7d] py-3">
              Товар: на складе в Казани*
              <div className="ml-8">Доставка: в день заказа</div>
            </div>
            <div className="flex items-end py-2">
              <div className="text-[50px]">{product.price}</div>
              <div className="flex text-[25px] mx-2 py-3 items-end font-thin">
                ₽<div className="px-1">/ шт</div>
              </div>
            </div>
            <div className="text-[14px] text-[#7d7d7d]">Цена со склада</div>
            <div className="flex my-4">
              <div
                className="border border-[#5661CB] rounded py-2 text-[14px] px-4 hover:bg-[#5661CB] hover:text-[#fff] duration-300 cursor-pointer"
                onClick={handleAddToCart}
              >
                Добавить в корзину
              </div>
              <Link
                to="/payment"
                className="border border-[#5661CB] mx-3 text-[#fff] bg-[#5661CB] rounded py-2 text-[14px] px-4 hover:bg-transparent hover:text-black duration-300"
                onClick={handleAddToCart}
              >
                Купить в 1 клик
              </Link>
            </div>
            <div className="flex py-3">
              <div className=" flex items-center">
                <i
                  class="fa fa-truck text-[#5661CB] mr-2"
                  aria-hidden="true"
                ></i>
                <div className="underline text-[#494949]">Расчет доставки</div>
              </div>
              <div className="mx-4 flex items-center">
                <i
                  class="fa fa-calculator text-[#5661CB] mr-2"
                  aria-hidden="true"
                ></i>
                <div className="underline text-[#494949]">
                  Онлайн калькулятор
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-6 w-full">
          <div className="w-[50%] flex gap-4">
            <div className="block w-full pl-8 pr-2">
              <div className="text-[18px] font-semibold py-2 border-b border-[#9FA6EE]">
                Характеристики
              </div>
              {product.char.map((item) => (
                <div className="text-[14px]">
                  <div className="w-full flex py-2 border-b">
                    <div className="w-[50%] text-[#7d7d7d]">
                      {item.title}
                      {" :"}
                    </div>
                    <div className="w-[50%]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] pr-8 pl-2">
            <div className="text-[18px] font-semibold py-2 border-b border-[#9FA6EE]">
              ОПИСАНИЕ
            </div>
            <div className="text-[16px] font-[400] w-[650px] py-4">
              {product.longdesc}
            </div>
            <div className="text-[18px] font-semibold py-2 ">Оплата</div>
            <hr />
            <div className="text-[16px] font-[400] w-[530px] py-4">
              Мы принимаем наличные, банковские карты и безналичные расчеты.{" "}
            </div>
            <div className="text-[18px] font-semibold py-2 ">ДОСТАВКа</div>
            <hr />
            <div className="text-[16px] font-[400] w-[300px] py-4">
              Бесплатная доставка: 20 км от КазаниСрок доставки: от 2 до 20
              часов с момента подтверждения заказа
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
