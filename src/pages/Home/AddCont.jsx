import React, { useState } from "react";

const AddCont = ({ first, second, third, bottom }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const maxItem = 2;
  const maxItem2 = 3;
  const maxItemBottom = 4;
  return (
    <div>
      <div className="first">
        <div className="flex justify-center sm:justify-between items-center">
          <div className="text-[20px] sm:text-[24px] md:text-[36px] my-6">
            Проект из наших стройматериалов
          </div>
          <a href="#" className="hidden md:flex items-center text-[#5661CB]">
            Смотреть все проекты
            <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
          </a>
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
                <img src={item.img} alt="" />
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
      <div className="second hidden sm:block">
        <div className="flex justify-between items-center">
          <div className="text-[36px]">Дополнительные услуги</div>
        </div>
        <div className="hidden md:flex justify-between sm:p-10">
          {second.map((item) => (
            <div className="w-[350px] mx-4 hover:bg-[#5661CBE5] hover:text-white text-[#000] rounded-2xl items-center p-8 shadowb duration-300 hov_con">
              <i
                className={`${item.img} bg-[#9FA6EE1A] w-[70px] h-[70px] rounded-full flex justify-center items-center text-[#5661CB]`}
              ></i>
              <div className="block py-3">
                <div className="text-[18px] font-bold">{item.title}</div>
                <div className="text-[14px]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex md:hidden justify-between lg:p-10">
          {second.slice(0, maxItem2).map((item) => (
            <div className="w-[240px] lg:w-[300px] hover:bg-[#5661CBE5] hover:text-white text-[#000] rounded-2xl items-center p-8 shadowb duration-300 hov_con">
              <i
                className={`${item.img} bg-[#9FA6EE1A] w-[70px] h-[70px] rounded-full flex justify-center items-center text-[#5661CB]`}
              ></i>
              <div className="block py-3">
                <div className="text-[18px] font-bold">{item.title}</div>
                <div className="text-[14px]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="third">
        <div className="flex justify-center sm:justify-between items-center my-6">
          <div className="text-[28px] sm:text-[36px]">Наш шоурум</div>
          <a href="#" className="hidden md:flex items-center text-[#5661CB]">
            Перейти в контакты
            <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
          </a>
        </div>
        <div className="">
          <div className="sm:flex hidden justify-between lg:p-10">
            {third.map((item) => (
              <div className="zind w-[240px] lg:w-[430px] h-[260px]">
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <div className="flex sm:hidden">
            {third.slice(0, maxItem).map((item) => (
              <div>
                <img src={item.img} alt="" className="px-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom flex justify-between items-center mt-20 mb-4">
        <div className="">{"<"}</div>
        <div className="">
          <div className="hidden sm:flex justify-between w-full sm:mx-16">
            {bottom.map((item) => (
              <img src={item.img} className="w-[50px] lg:w-[100px] h-auto" />
            ))}
          </div>
          <div className="flex sm:hidden justify-between w-full">
            {bottom.slice(0, maxItemBottom).map((item) => (
              <img src={item.img} className="w-[80px] h-auto" />
            ))}
          </div>
        </div>
        <div className="">{">"}</div>
      </div>
    </div>
  );
};

export default AddCont;
