import React, { useState } from "react";
import Card from "./Card";
import img from '../../assets/1.png'
import capimg1 from '../../assets/Icons/capimg1.png'
import capimg2 from '../../assets/Icons/capimg2.png'
import capimg3 from '../../assets/Icons/capimg3.png'

export default function MainContainer() {
    const [prod, setProd] = useState([
        {
            id: 1,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg3,
            url: '#'
        },
        {
            id: 2,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg3,
            url: '#'
        },
        {
            id: 3,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg3,
            url: '#'
        },
        {
            id: 4,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg3,
            url: '#'
        },
        {
            id: 5,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg3,
            url: '#'
        },
        {
            id: 6,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg3,
            url: '#'
        },
        {
            id: 7,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg2,
            url: '#'
        },
        {
            id: 8,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg1,
            url: '#'
        },
        {
            id: 9,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            url: '#'
        },
        {
            id: 10,
            title: 'Кирпич облицовочный M95 Воткинский',
            img: img,
            desc1: 'Кол-во на поддоне, шт. - 297',
            desc2: 'Формат одинарный',
            price: '4500',
            cap: capimg3,
            url: '#'
        },
    ])
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-[36px]">Спецпредложения</div>
        <a href="#" className="flex items-center text-[#D41A36]">
          Перейти в раздел скидок
          <i class="fa fa-arrow-right mx-2" aria-hidden="true"></i>
        </a>
      </div>
      <div className="">
        <Card prod={prod}/>
      </div>
    </div>
  );
}
