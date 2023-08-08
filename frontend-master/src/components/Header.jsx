import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/germes_logo.png";
import star from "../assets/Icons/Star/Main.png";
import cart from "../assets/Icons/Cart/Main.png";
import hamb from "../assets/hamb.png";

export default function Header() {
  const [navToggle, setnavToggle] = useState(true);

  const handleNav = () => {
    setnavToggle((prevState) => !prevState);
  };

  return (
    <div className="">
      <div className="hidden md:flex justify-between items-center h-[111px]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="nav text-[15px] flex text-[#494949] justify-between">
          <Link to="/services" className="mx-5">
            <div className="">Услуги</div>
          </Link>
          <Link to="/delivery" className="mx-5">
            <div className="">Доставка</div>
          </Link>
          <Link to="/payment" className="mx-5">
            <div className="">Оплата</div>
          </Link>
          <Link to="/projects" className="mx-5">
            <div className="">Проекты</div>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="icons flex mx-10">
            <Link to="#" className="mx-3">
              <img src={star} alt="" />
            </Link>
            <Link to="/cart" className="mx-3">
              <img src={cart} alt="" />
            </Link>
          </div>
          <div className="num block text-center">
            <div className="xl:text-[20px]">8 (843) 203-93-43</div>
            <Link to="#">
              <div className="text-[13px] text-[#5661CB] underline">
                заказать обратный звонок
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-between items-center h-[80px]">
        <img src={logo} alt="" className="w-[120px]" />
        <div className="flex text-[#5661CB] items-center">
          <Link to="#">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </Link>
          <div className="mobToggle mx-4" onClick={handleNav}>
            {navToggle ? (
              <img src={hamb} alt="" className="w-[25px]" />
            ) : (
              <i className="fa-solid fa-x text-[25px]"></i>
            )}
          </div>
        </div>
        <div
          className={`${
            navToggle ? "closeRespMenu" : "openRespMenu"
          } fixed resp_menu h-[100vh] top-0 left-0 w-[70%] sm:w-[45%] text-[15px] block bg-[#5662cb] text-white justify-between p-10`}
        >
          <Link to="/">
            <img src={logo} className="w-[150px] py-4" alt="" />
          </Link>
          <div>
            <Link
              to="/"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Акции
            </Link>
            <Link
              to="/services"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Услуги
            </Link>
            <Link
              to="/delivery"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Доставка
            </Link>
            <Link
              to="/payment"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Оплата
            </Link>
            <Link
              to="/projects"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Проекты
            </Link>
            <Link
              to="/about"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              О компании
            </Link>
            <Link
              to="/contact"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Контакты
            </Link>
            <div className="flex py-4">
              <Link to="/cart" className="mr-3">
                  <i class="fa fa-cart-arrow-down text-[20px]" aria-hidden="true"></i>
              </Link>
              <Link to="#" className="mx-3">
                <i class="fa fa-star text-[20px]" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
