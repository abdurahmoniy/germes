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

export default function Home() {
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
  const maxItem = 2;
  return (
    <div>
      <div className="md:px-20 lg-[px-36] xl:px-60 px-4">
        <Header />
      </div>
      <hr />
      <div className="block md:px-20 lg-[px-36] xl:px-60 px-4">
        <div className="flex">
          <CategoryList />
          <div className="promotions w-full pl-8 hidden lg:block">
            <div className="top flex justify-between items-center py-6">
              <div className="text-[#D41A36]">Акции</div>
              <div className="search flex justify-center items-center border rounded-md p-2 text-[12px] xl:w-[248px]">
                <input
                  type="text"
                  placeholder="Введите название товара"
                  className="w-full"
                />
                <i class="fa fa-search text-[#5661CB]" aria-hidden="true"></i>
              </div>
              <a href="#" className="text-[16px]">
                О КОМПАНИИ
              </a>
              <a href="#" className="text-[16px]">
                КОНТАКТЫ
              </a>
              <a
                href=""
                className="w-[200px] py-1 rounded-md bg-[#5661CB] text-center text-white"
              >
                Оптовый заказ
              </a>
            </div>
            <div className="xl:border flex rounded-lg xl:bg-[#5D68CF]">
              <img src={img} alt="" className="xl:w-[60%] lg:h-[340px]" />
              <div className="text-white px-20 py-8 xl:block hidden">
                <div className="text-[20px]">
                  Кирпич облицовочный M95 <br /> Воткинский
                </div>
                <div className="text-[14px] py-3">
                  Кол-во на поддоне, шт. - 297 <br />
                  Формат одинарный
                </div>
                <div className="text-[12px] flex underline">
                  <a href="#">бесплатная доставка</a>
                  <a href="#" className="ml-6">
                    в наличии
                  </a>
                </div>
                <div className="flex items-end py-4">
                  <div className="text-[26px]">4500</div>
                  <div className="flex text-[15px] mx-2 py-1">
                    ₽<div className="px-1">/ шт</div>
                  </div>
                </div>
                <div className="flex">
                  <a
                    href="#"
                    className="bg-[#fff] text-[#272727] text-[14px] py-1 px-2 rounded-sm"
                  >
                    Купить в 1 клик
                  </a>
                  <a
                    href="#"
                    className=" border-white border rounded-sm py-1 px-3 mx-3"
                  >
                    <img src={cart} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="bg_mob text-center text-white py-12 rounded-xl">
            <div className="text-[18px] font-bold">
              Лако-красочные материалы
            </div>
            <div className="text-[12px] my-4">
              Скидки 30% на немецкую продукцию <br /> Alpina на нашем сайте
            </div>
            <a
              href="#"
              className="px-3 py-2 bg-transparent text-white my-3 border-white border rounded-sm text-[12px]"
            >
              Перейти в каталог
            </a>
          </div>
          <div className="flex sm:hidden justify-between my-4">
            {items.slice(0, maxItem).map((item) => (
              <div className="flex w-[250px] items-center" key={item.id}>
                <img src={item.icon} alt="" />
                <div className="text-[8px] text-[#272727] m-2">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex justify-between my-4 xl:ml-80">
          {items.map((item) => (
            <div className="flex w-[250px] items-center" key={item.id}>
              <img src={item.icon} alt="" />
              <div className="text-[12px] text-[#272727] m-2">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-20 lg-[px-36] xl:px-60 px-4">
        <MainContainer />
      </div>
      <div className="md:px-20 lg-[px-36] xl:px-60 px-4 bg-[#F7F7F7] py-14">
        <Footer />
      </div>
    </div>
  );
}
