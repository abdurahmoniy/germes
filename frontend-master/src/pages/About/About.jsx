import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Carousel from "../../components/Carousel";
import certif from "../../assets/certificat.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import carusel1 from '../../assets/carusel1.png';
import carusel2 from '../../assets/carusel2.png';
import carusel3 from '../../assets/carusel3.png';
import carusel4 from '../../assets/carusel4.png'; 

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const aboutCar = [
    carusel1, carusel2, carusel3, carusel4
  ]
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
        }
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
        }
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
        }
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
      <div className="text-[30px]">О компании</div>
      <div className="flex w-full py-12 justify-between">
        <div className="w-[28%] pr-6">
          <Carousel object={aboutCar}/>
        </div>
        <div className="w-[68%]">
          <div className="font-semibold">
            Специализируемся на поставках строительных материалов. <br />{" "}
            Работаем по всей России
          </div>
          <div className="flex justify-between py-8">
            {about.map((item) => (
              <div>
                <div className="text-[#5661CB] font-bold">
                  {"> "}
                  {item.top}
                </div>
                <div className="">{item.bottom}</div>
              </div>
            ))}
          </div>
          <div className="text-[14px] text-[#272727]">
            Полнотелый кирпич – это популярный строительный материал, который
            был изобретен столетия назад, но до их пор пользуется большим
            спросом. До наших времен дошло множество исторических построек,
            которые служат живым примером прочности и долговечности этого
            материала. Несмотря на появление новой разновидности кирпича с
            полостями внутри, полнотелый кирпич до сих пор пользуется большой
            популярностью.
          </div>
          <div className="text-[14px] text-[#272727] pt-6">
            На кирпич и камень керамические общие технические условия и
            стандарты качества, установленные ГОСТ. Эти материалы обладают
            высокой прочностью, морозостойкостью, негорючестью, небольшая
            теплопроводность.
          </div>
        </div>
      </div>
      <div className="text-[30px]">Сертификаты</div>
      <div className="flex py-6">
        <img src={certif} alt="" className="w-[280px] main" />
        <div className="px-2 block">
          <div className="flex justify-between w-full">
            <div className="bg-[#5661CB] w-[74%] absolute h-[320px] -z-10"></div>
            {about.map((item) => (
              <div className="mx-6 w-[230px] second">
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <div className="flex m-4">
            <div className="text-white bg-[#5661CB] w-[25px] h-[25px] flex justify-center items-center rounded-full ml-4 mr-1">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div className="text-white bg-[#5661CB] w-[25px] h-[25px] flex justify-center items-center rounded-full mr-4 ml-1">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
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
                <Carousel object={item.carusel.map(imgObj => imgObj.img)}/>
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
