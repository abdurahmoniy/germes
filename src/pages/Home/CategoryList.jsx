import React from "react";
import icon1 from "../../assets/Icons/Group.png";
import icon2 from "../../assets/Icons/Vector.png";

export default function CategoryList() {
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

  return (
    <div className="py-6">
      <div className="w-[300px] h-[40px] flex bg-[#5661CB] text-white items-center rounded-md">
        <img src={icon1} alt="" className="p-2 mx-2" />
        Каталог
      </div>
      <div className="bo_shdw">
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
  );
}
