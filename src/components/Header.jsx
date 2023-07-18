import React from "react";
import logo from "../assets/germes_logo.png";
import star from "../assets/Icons/Star/Main.png";
import cart from "../assets/Icons/Cart/Main.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-[111px]">
      <img src={logo} alt="" />
      <div className="nav text-[15px] flex text-[#494949] justify-between">
        <a href="#" className="mx-5">
          <div className="">Услуги</div>
        </a>
        <a href="#" className="mx-5">
          <div className="">Доставка</div>
        </a>
        <a href="#" className="mx-5">
          <div className="">Оплата</div>
        </a>
        <a href="#" className="mx-5">
          <div className="">Проекты</div>
        </a>
      </div>
      <div className="flex items-center">
        <div className="icons flex mx-10">
            <a href="#" className="mx-3">
            <img src={star} alt="" />
            </a>
            <a href="#" className="mx-3">
            <img src={cart} alt="" />
            </a>
        </div>
        <div className="num block text-center">
          <div className="text-[20px]">8 (843) 203-93-43</div>
          <a href="#">
            <div className="text-[13px] text-[#5661CB] underline">
              заказать обратный звонок
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
