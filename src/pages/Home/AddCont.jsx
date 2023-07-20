import React, { useState } from "react";

const AddCont = ({ first }) => {
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
              {hoveredIndex === index && (
                <div className="hoverContent w-[430px] h-[260px] bg-[#5661CBE5] text-white rounded-lg flex items-center out_off absolute top-0 left-0">
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCont;
