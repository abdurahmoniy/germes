import React, { useState } from "react";
import icon1 from "../../assets/Icons/Group.png";

export default function CategoryList() {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const catgitems = [
    {
      id: 1,
      title: "Стеновые материалы",
      text_color: "#000",
    },
    {
      id: 2,
      title: "Фасадные материалы",
      text_color: "#000",
    },
    {
      id: 3,
      title: "Строительные блоки",
      text_color: "#000",
    },
    {
      id: 4,
      title: "Отделочные материалы",
      text_color: "#000",
    },
    {
      id: 5,
      title: "Сухие смеси",
      text_color: "#000",
    },
    {
      id: 6,
      title: "Благоустройство",
      text_color: "#000",
    },
    {
      id: 7,
      title: "Лако-красочные материалы",
      text_color: "#000",
    },
    {
      id: 8,
      title: "Прочие услуги",
      text_color: "#000",
    },
    {
      id: 9,
      title: "Распродажа товаров",
      text_color: "#D41A36",
    },
  ];

  const handleToggleCategoryList = () => {
    setShowCategoryList((prevState) => !prevState); // Toggle the state when the button is clicked
  };
  return (
    <div className="w-[100%] lg:w-auto">
      <div className="py-6 hidden lg:block">
        <div className="w-[300px] h-[40px] flex bg-[#5661CB] text-white items-center rounded-md">
          <img src={icon1} alt="" className="p-2 mx-2" />
          Каталог
        </div>
        <div className="box_shdw">
          {catgitems.map((item) => (
            <a href="#" key={item.id} className="flex justify-between p-2">
              <div className={`text-[${item.text_color}]`}>{item.title}</div>
              <div className="">
                <i class="fas fa-angle-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mobileCat py-6 block lg:hidden">
        <div className="h-[40px] flex bg-[#5661CB] text-white items-center rounded-md justify-between">
          <img
            src={icon1}
            alt=""
            className="mobileCat_btn p-2 mx-2"
            onClick={handleToggleCategoryList}
          />
          <div className="">Каталог товаров</div>
          <a
            href="#"
            className="h-full items-center hidden sm:flex px-12 text-center border-r border-l"
          >
            Акции
          </a>
          <a
            href="#"
            className="h-full items-center hidden sm:flex text-center"
          >
            О компании
          </a>
          <a
            href="#"
            className="h-full items-center hidden sm:flex mx-2 px-12 text-center border-r border-l"
          >
            Контакты
          </a>
          <i className="fa fa-search mx-2 p-2" aria-hidden="true"></i>
        </div>
        <div className={`bo_shdw ${showCategoryList ? "bo_shdw_visible" : ""}`}>
          {catgitems.map((item) => (
            <a href="#" key={item.id} className="flex justify-between p-2">
              <div className={`text-[${item.text_color}]`}>{item.title}</div>
              <div className="">
                <i className="fas fa-angle-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
