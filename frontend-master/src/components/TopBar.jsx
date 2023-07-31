import React, { useState } from "react";
import icon1 from "../assets/Icons/Group.png";
import cart from "../assets/Icons/Cart/Main2.png";
import img from "../assets/image.jpg";

export default function TopBar() {
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
        setShowCategoryList((prevState) => !prevState);
    };
    return (
        <div className="">
            <div className="hidden lg:flex justify-between items-center py-4">
                <div className="">
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
                        className={`bo_shdw absolute w-[300px] bg-white z-10 ${showCategoryList ? "bo_shdw_visible" : ""}`}
                    >
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
                <div className="text-[#D41A36]">Акции</div>
                <div className="search flex justify-center items-center border rounded-md p-2 text-[12px] xl:w-[248px]">
                    <input
                        type="text"
                        placeholder="Введите название товара"
                        className="w-full"
                    />
                    <i class="fa fa-search text-[#5661CB]" aria-hidden="true"></i>
                </div>
                <a href="/about" className="text-[16px]">
                    О КОМПАНИИ
                </a>
                <a href="/contact" className="text-[16px]">
                    КОНТАКТЫ
                </a>
                <a
                    href=""
                    className="w-[200px] py-1 rounded-md bg-[#5661CB] text-center text-white"
                >
                    Оптовый заказ
                </a>
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
