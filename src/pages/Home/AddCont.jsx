import React, { useState } from "react";

const AddCont = ({ first, second, third, bottom }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="first">
        <div className="flex justify-between items-center">
          <div className="text-[36px]">Проект из наших стройматериалов</div>
          <a href="#" className="flex items-center text-[#5661CB]">
            Смотреть все проекты
            <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
          </a>
        </div>
        <div className="flex justify-between p-10">
          {first.map((item, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-[430px] h-[260px]">
                <img src={item.img} alt="" />
              </div>
              <div
                className="hoverContent w-[430px] h-[262px] bg-[#5661CBE5] text-white rounded-lg flex items-center out_off absolute top-0 left-0"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  visibility: hoveredIndex === index ? "visible" : "hidden",
                  transition: "opacity 0.5s, visibility 0.5s",
                }}
              >
                <div className="block">
                  <div className="text-[22px]">{item.title}</div>
                  <div className="text-[14px] py-6">{item.desc}</div>
                  <a
                    href={item.url}
                    className="text-[12px] rounded p-2 border border-white"
                  >
                    Перейти к объекту
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="second">
        <div className="flex justify-between items-center">
          <div className="text-[36px]">Дополнительные услуги</div>
        </div>
        <div className="flex justify-between p-10">
          {second.map((item) => (
            <div className="w-[350px] hover:bg-[#5661CBE5] hover:text-white text-[#000] rounded-2xl items-center p-8 shadowb duration-300 hov_con">
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
        <div className="flex justify-between items-center">
          <div className="text-[36px]">Наш шоурум</div>
          <a href="#" className="flex items-center text-[#5661CB]">
            Перейти в контакты
            <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
          </a>
        </div>
        <div className="flex justify-between p-10">
          {third.map((item) => (
            <div className="w-[430px]">
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="bottom flex justify-between items-center mt-20 mb-4">
        <div className="">{"<"}</div>
        <div className="flex justify-between w-full mx-16">
          {bottom.map(item =>(
            <img src={item.img} className="w-[100px] h-auto"/>
          ))}
        </div>
        <div className="">{">"}</div>
      </div>
    </div>
  );
};

export default AddCont;
