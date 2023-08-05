import React from "react";
import TopBar from "../../components/TopBar";
import Carousel from "../../components/Carousel";

export default function About() {
  const about = [
    {
      top: 15,
      bottom: " лет на рынке",
    },
    {
      top: 100,
      bottom: " товарных направлений",
    },
    {
      top: 10000,
      bottom: " товарных позиций",
    },
    {
      top: 100,
      bottom: " товарных поставщиков",
    },
  ];
  return (
    <div>
      <TopBar />
      <div className="text-[30px]">О компании</div>
      <div className="flex w-full py-12 justify-between">
        <div className="w-[28%] pr-6">
          <Carousel />
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
        
    </div>
  );
}
