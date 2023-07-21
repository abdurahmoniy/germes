import React from "react";
import visa from "../assets/visa.png";
import mast from "../assets/mastercard.png";

export default function Footer() {
  return (
    <div className="">
      <div className="hidden sm:block">
        <div className="flex justify-between">
          <div className="block">
            <div className="font-bold">Организация</div>
            <div className="block text-[12px] py-4">
              <div className="">О компании</div>
              <div className="">Услуги</div>
              <div className="">Статьи</div>
              <div className="">Вакансии</div>
            </div>
          </div>
          <div className="block">
            <div className="font-bold">Как купить</div>
            <div className="block text-[12px] py-4">
              <div className="">Доставка</div>
              <div className="">Оплата</div>
              <div className="">Проекты</div>
              <div className="">Контакты</div>
            </div>
          </div>
          <div className="block">
            <div className="font-bold">Мы на связи</div>
            <div className="block text-[12px] py-4">
              <div className="">8 (843) 203-93-43</div>
              <div className="">info@td-germes.ru</div>
              <div className="flex fa-2x">
                <i class="fa-brands fa-whatsapp text-green-600"></i>
                <i class="fa-brands fa-telegram text-blue-600 mx-2"></i>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="font-bold">Наш адрес</div>
            <div className="block text-[12px] py-4">
              <div className="">Казань</div>
              <div className="">ул.Сары Садыковой 30, 2 этаж</div>
              <div className="">
                Пн - Пт c 8:30 до 17:30 <br />
                Суббота c 9:00 до 14:00
              </div>
            </div>
          </div>
          <a
            href=""
            className="w-[200px] rounded-md bg-[#5661CB] text-white h-[40px] flex items-center justify-center"
          >
            Оптовый заказ
          </a>
        </div>
        <hr />
        <div className="hidden sm:flex justify-between my-3">
          <div className="text-[14px]">
            © 2012 — 2020, О0О «ТК «Гермес» <br /> Сайт www.td-germes.ru носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой. <br /> Для получения информации о
            стоимости товаров, пожалуйста, обращайтесь в отдел продаж компании
            Гермес.
          </div>
          <div className="flex">
            <img src={visa} alt="" className="mx-1" />
            <img src={mast} alt="" className=" mx-4" />
          </div>
        </div>
      </div>
      <div className="block sm:hidden text-center">
        <div className="flex text-[14px] justify-center my-2">
          <div className="mx-1">8 (843) 203-93-43</div>
          <div className="mx-1">info@td-germes.ru</div>
        </div>
        <div className="font-bold my-2">Казань</div>
        <div className=" my-2">ул.Сары Садыковой 30, 2 этаж</div>
        <div className="flex justify-center items-center my-2">
            <i class="fa-brands fa-whatsapp text-green-600 mx-2" aria-hidden="true"></i>
            - задайте вопрос
        </div>
        <hr />
        <div className="text-[12px] text-left text-[#494949] my-4">
            © 2012 — 2020, О0О «ТК «Гермес» <br /> Сайт www.td-germes.ru носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой. <br /> Для получения информации о
            стоимости товаров, пожалуйста, обращайтесь в отдел продаж компании
            Гермес.
          </div>
      </div>
    </div>
  );
}
