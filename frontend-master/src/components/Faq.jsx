import React, { useState } from "react";

export default function Faq({faq}) {
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <div>
      <div className="py-2 text-[30px]">Частые вопросы</div>
      <div className="py-4 block lg:grid grid-cols-2 lg:w-[70%]">
        {faq.map((item, index) => (
          <div className="px-4  lg:w-[80%]">
            <div key={index} className="py-4">
              <div
                className="flex justify-between question items-center cursor-pointer select-none"
                onClick={() => toggleAnswer(index)}
              >
                {item.que}
                <div className="">
                  <i
                    className={`fa fa-angle-right duration-300 -z-10 ${
                      expandedIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              {expandedIndex === index && (
                <div
                  className={`text-[#7e7e7e] answer absolute lg:w-[410px] z-10 bg-white py-2 duration-300 answer select-none ${
                    expandedIndex === index ? "expanded" : ""
                  }`}
                >
                  {item.ans}
                </div>
              )}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
