import React from "react";

export default function MainContainer() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-[36px]">Спецпредложения</div>
        <a href="#" className="flex items-center text-[#D41A36]">
          Перейти в раздел скидок
          <i class="fa fa-arrow-right mx-2" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
