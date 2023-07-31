import React from "react";
import Header from "../../components/Header";
import CategoryList from "./CategoryList";
import cart from "../../assets/Icons/Cart/Main2.png";
import img from "../../assets/image.jpg";
import icon1 from "../../assets/Icons/Icon.png";
import icon2 from "../../assets/Icons/Icon (1).png";
import icon3 from "../../assets/Icons/Icon (2).png";
import icon4 from "../../assets/Icons/Icon (3).png";
import MainContainer from "./MainContainer";
import Footer from "../../components/Footer";

export default function Home({ onAddToCart }) {
  const items = [
    {
      id: 1,
      icon: icon1,
      title: "Доставка стройматериалов и аренда спецтехники",
    },
    {
      id: 2,
      icon: icon2,
      title: "Скидки застройщикам и оптовикам",
    },
    {
      id: 3,
      icon: icon4,
      title: "Предлагаем лучшую цену",
    },
    {
      id: 4,
      icon: icon3,
      title: "Работаем 7 дней в неделю",
    },
  ];
  return (
    <div>
        <CategoryList items={items} />
        <MainContainer onAddToCart={onAddToCart} />
    </div>
  );
}
