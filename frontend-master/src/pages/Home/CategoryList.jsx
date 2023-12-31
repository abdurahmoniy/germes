import React, { useState } from "react";
import icon1 from "../../assets/Icons/Group.png";
import cart from "../../assets/Icons/Cart/Main2.png";
import img from "../../assets/image.jpg";
import { Link } from "react-router-dom";

export default function CategoryList({ items }) {
  const maxItem = 2;
  const [showCategoryList, setShowCategoryList] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const catgitems = [
    {
      id: 1,
      title: "Стеновые материалы",
      text_color: "#000",
      sub_cat: [
        {
          id: 1,
          title: "Кирпич",
        },
        {
          id: 2,
          title: "Кирпич 2",
        },
      ],
    },
    {
      id: 2,
      title: "Фасадные материалы",
      text_color: "#000",
      sub_cat: [
        {
          id: 1,
          title: "Кирпич",
        },
        {
          id: 2,
          title: "Кирпич 2",
        },
      ],
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

  const generateSlug = (title) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };

  catgitems.forEach((item) => {
    if (item.sub_cat) {
      item.sub_cat.forEach((subItem) => {
        subItem.slug = generateSlug(subItem.title);
      });
    }
  });
  const handleToggleCategoryList = () => {
    setShowCategoryList((prevState) => !prevState);
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="pt-6 hidden lg:block">
          <div className="w-[300px] h-[40px] flex bg-[#5661CB] text-white items-center rounded-md">
            <img
              src={icon1}
              alt=""
              className="p-2 mx-2"
              onClick={handleToggleCategoryList}
            />
            Каталог
          </div>
          <div
            className={`bo_shdw ${showCategoryList ? "bo_shdw_visible" : ""}`}
          >
            {catgitems.map((item) => (
              <div className="">
                <div
                  key={item.id}
                  className="category"
                  onMouseEnter={() => setHoveredCategory(item.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div
                    className={`flex justify-between w-full p-2 hover:bg-[#f0f0f0] ${
                      hoveredCategory === item.id && item.sub_cat
                        ? "bg-[#f7f7f7] cat_shadow"
                        : ""
                    }`}
                  >
                    <div className={`text-[${item.text_color}]`}>
                      {item.title}
                    </div>
                    <div className="">
                      <div
                        className={`fas fa-angle-right ${
                          hoveredCategory === item.id && item.sub_cat
                            ? "rotate-90 duration-300"
                            : "duration-300"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div className="sub-categories">
                    {hoveredCategory === item.id && item.sub_cat && (
                      <div className="">
                        {item.sub_cat.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={`/category/${generateSlug(item.title)}/${
                              subItem.slug
                            }`}
                            className="sub-category flex justify-between w-full"
                          >
                            <div className="">{subItem.title}</div>
                            <i className="fas fa-angle-right"></i>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="block">
          <div className="top hidden lg:flex justify-between items-center py-6">
            <div className="text-[#D41A36]">Акции</div>
            <div className="search flex justify-center items-center border rounded-md p-2 text-[12px] xl:w-[248px]">
              <input
                type="text"
                placeholder="Введите название товара"
                className="w-full"
              />
              <i class="fa fa-search text-[#5661CB]" aria-hidden="true"></i>
            </div>
            <Link to="/about" className="text-[16px]">
              О КОМПАНИИ
            </Link>
            <Link to="/contact" className="text-[16px]">
              КОНТАКТЫ
            </Link>
            <Link
              to=""
              className="w-[200px] py-1 rounded-md bg-[#5661CB] text-center text-white"
            >
              Оптовый заказ
            </Link>
          </div>
          <div className="promotions w-full hidden lg:block">
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
        <div className="mobileCat w-full py-6 block lg:hidden">
          <div className="h-[40px] flex bg-[#5661CB] text-white items-center rounded-md justify-between">
            <img
              src={icon1}
              alt=""
              className="mobileCat_btn p-2 mx-2"
              onClick={handleToggleCategoryList}
            />
            <div className="">Каталог товаров</div>
            <Link
              to="#"
              className="h-full items-center hidden sm:flex px-12 text-center border-r border-l"
            >
              Акции
            </Link>
            <Link
              to="#"
              className="h-full items-center hidden sm:flex text-center"
            >
              О компании
            </Link>
            <Link
              to="#"
              className="h-full items-center hidden sm:flex mx-2 px-12 text-center border-r border-l"
            >
              Контакты
            </Link>
            <i className="fa fa-search mx-2 p-2" aria-hidden="true"></i>
          </div>
          <div
            className={`bo_shdw ${showCategoryList ? "bo_shdw_visible" : ""}`}
          >
            {catgitems.map((item) => (
              <Link
                to={`/category/${item.slug}`}
                key={item.id}
                className="category flex justify-between p-2"
              >
                <div className={`text-[${item.text_color}]`}>{item.title}</div>
                <div className="">
                  <i className="fas fa-angle-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="bg_mob text-center text-white py-12 rounded-xl">
          <div className="text-[18px] font-bold">Лако-красочные материалы</div>
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
              <div className="text-[8px] text-[#272727] m-2">{item.title}</div>
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
  );
}
