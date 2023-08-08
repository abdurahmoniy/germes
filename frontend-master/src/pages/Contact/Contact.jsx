import React, { useState } from "react";
import map from "../../assets/mapfull.png";
import TopBar from "../../components/TopBar";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import carusel1 from "../../assets/carusel1.png";
import carusel2 from "../../assets/carusel2.png";
import carusel3 from "../../assets/carusel3.png";
import carusel4 from "../../assets/carusel4.png";
import Carousel from "../../components/Carousel";
import certif from "../../assets/certificat.png";

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const aboutCar = [carusel1, carusel2, carusel3, carusel4];
  const first = [
    {
      id: 1,
      carusel: [
        {
          img: img1,
        },
        {
          img: img3,
        },
        {
          img: img2,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 2,
      carusel: [
        {
          img: img3,
        },
        {
          img: img2,
        },
        {
          img: img1,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 3,
      carusel: [
        {
          img: img2,
        },
        {
          img: img1,
        },
        {
          img: img3,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
  ];
  const about = [
    {
      top: 15,
      bottom: " лет на рынке",
      img: certif,
    },
    {
      top: 100,
      bottom: " товарных направлений",
      img: certif,
    },
    {
      top: 10000,
      bottom: " товарных позиций",
      img: certif,
    },
    {
      top: 100,
      bottom: " товарных поставщиков",
      img: certif,
    },
  ];
  return (
    <div>
      <TopBar />
      <div className="py-4">
        <img src={map} alt="" />
      </div>
      <div className="flex w-full py-12 justify-between">
        <div className="w-[68%]">
          <div className="font-bold text-[30px]">Контакты</div>
          <div className="pt-4">
            На кирпич и камень керамические общие технические условия и
            стандарты качества, установленные ГОСТ. Эти материалы обладают
            высокой прочностью, морозостойкостью, негорючестью, небольшая
            теплопроводность.
          </div>
          <div className="flex py-2">
            <div className="block w-[60%]">
              <div className="font-semibold text-[20px]">Адреса офисов:</div>
              <div className="py-2">420087, г. Казань, ул.Сары Садыковой 30 <br /> Имеется бесплатная парковка</div>
            </div>
            <div className="block">
              <div className="font-semibold text-[20px]">Время работы:</div>
              <div className="py-2">Пн-Пт 8:30–17:30 <br /> Сб: 9:00–14:00</div>
            </div>
          </div>
          <div className="flex py-2">
            <div className="block w-[60%]">
              <div className="font-semibold text-[20px]">E-mail:</div>
              <div className="py-2">vavilonkzn@yandex.ru (для заказа строительных материалов) <br /> germescom@mail.ru (для заказа отделочных материалов)</div>
            </div>
            <div className="block">
              <div className="font-semibold text-[20px]">Телефон:</div>
              <div className="py-2">8 (843) 558-36-23 <br /> Заказать звонок</div>
            </div>
          </div>
        </div>
        <div className="w-[28%] pr-6">
          <Carousel object={aboutCar} />
        </div>
      </div>
      <div className="first">
        <div className="flex justify-center sm:justify-between items-center">
          <div className="text-[20px] sm:text-[24px] md:text-[36px] my-6">
            Проект из наших стройматериалов
          </div>
        </div>
        <div className="grid sm:flex grid-cols-2 justify-between md:p-10">
          {first.map((item, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="zind w-[150px] sm:w-[240px] lg:w-[350px] xl:w-[430px] sm:h-[260px] h-[120px]">
                <Carousel object={item.carusel.map((imgObj) => imgObj.img)} />
              </div>
              <div
                className="hoverContent w-[150px] sm:w-[240px] lg:w-[350px] xl:w-[430px] h-[93px] sm:h-[146px] lg:h-[213px] xl:h-[262px] bg-[#5661CBE5] text-white rounded-lg flex items-center out_off absolute top-0 left-0"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  visibility: hoveredIndex === index ? "visible" : "hidden",
                  transition: "opacity 0.5s, visibility 0.5s",
                }}
              >
                <div className="block">
                  <div className="text-[12px] md:text-[22px] xl:my-4 my-2">
                    {item.title}
                  </div>
                  <div className="text-[10px] md:text-[14px] xl:py-6 py-2 hidden sm:block">
                    {item.desc}
                  </div>
                  <a
                    href={item.url}
                    className="hidden md:block text-[12px] rounded p-2 border border-white"
                  >
                    Перейти к объекту
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
