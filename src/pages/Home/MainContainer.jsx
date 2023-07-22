import React, { useState } from "react";
import Card from "./Card";
import img from "../../assets/1.png";
import capimg1 from "../../assets/Icons/capimg1.png";
import capimg2 from "../../assets/Icons/capimg2.png";
import capimg3 from "../../assets/Icons/capimg3.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import b1 from "../../assets/bottom/1.png";
import b2 from "../../assets/bottom/2.png";
import b3 from "../../assets/bottom/3.png";
import b4 from "../../assets/bottom/4.png";
import b5 from "../../assets/bottom/5.png";
import b6 from "../../assets/bottom/6.png";
import b7 from "../../assets/bottom/7.png";
import AddCont from "./AddCont";

export default function MainContainer() {
  const prod = [
    {
      id: 1,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 2,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 3,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 4,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 5,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 6,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 7,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg2,
      url: "#",
    },
    {
      id: 8,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg1,
      url: "#",
    },
    {
      id: 9,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      url: "#",
    },
    {
      id: 10,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
  ];
  const first = [
    {
      id: 1,
      img: img1,
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 2,
      img: img2,
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 3,
      img: img3,
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
  ];
  const second = [
    {
      id: 1,
      img: "fa-solid fa-truck",
      title: "Доставка стройматериалов ",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект",
    },
    {
      id: 2,
      img: "fa-solid fa-user",
      title: "Шеф-монтаж",
      desc: "Демонстрация секретов успешного строительства",
    },
    {
      id: 3,
      img: "fa-solid fa-brick",
      title: "Кладка кирпича",
      desc: "Кладка кирпича и блоков Pototherm",
    },
    {
      id: 3,
      img: "fa-regular fa-rectangle-list",
      title: "Сезонное хранение",
      desc: "Хранение стройматериалов приобретенных зимой",
    },
  ];
  const third = [
    {
      id: 1,
      img: img4,
    },
    {
      id: 2,
      img: img5,
    },
    {
      id: 3,
      img: img6,
    },
  ];
  const bottom = [
    {
      id: 1,
      img: b1,
    },
    {
      id: 2,
      img: b2,
    },
    {
      id: 3,
      img: b3,
    },
    {
      id: 4,
      img: b4,
    },
    {
      id: 5,
      img: b5,
    },
    {
      id: 6,
      img: b6,
    },
    {
      id: 7,
      img: b7,
    },
  ];
  return (
    <div>
      <div className="main">
        <div className="flex justify-center sm:justify-between items-center">
          <div className="text-[28px] sm:text-[36px]">Спецпредложения</div>
          <a href="#" className="hidden md:flex items-center text-[#D41A36]">
            Перейти в раздел скидок
            <i class="fa fa-arrow-right mx-2" aria-hidden="true"></i>
          </a>
        </div>

        <div className="">
          <Card prod={prod} />
        </div>
      </div>
      <div className="additional">
        <AddCont first={first} second={second} third={third} bottom={bottom} />
      </div>
    </div>
  );
}
