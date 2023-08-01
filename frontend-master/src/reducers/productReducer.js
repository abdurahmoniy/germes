import img from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import capimg1 from "../assets/Icons/capimg1.png";
import capimg2 from "../assets/Icons/capimg2.png";
import capimg3 from "../assets/Icons/capimg3.png";

const initialState = {
  prod: [
    {
      id: 1,
      title: "Кирпич облицовочный M96",
      adress: "Воткинский",
      longdesc:
        "На кирпич и камень керамические общие технические условия и стандарты качества, установленные ГОСТ. Эти материалы обладают высокой прочностью, морозостойкостью, негорючестью, небольшая теплопроводность, влагостойкостью. продольное и поперечное. ",
      img: img,
      sec: {
        det1: img2,
        det2: img3,
        det3: img4,
        det4: img5,
        det5: img6,
      },
      char: [
        {
          title: "Категория",
          value: "Кирпич",
        },
        {
          title: "Производитель",
          value: "Багдановичское ОАО “Огнеупоры",
        },
        {
          title: "Марка прочности",
          value: "M2039",
        },
        {
          title: "Размер, мм",
          value: "250*120*65",
        },
        {
          title: "Вес, кг",
          value: "5.8",
        },
        {
          title: "Водополгащение, %",
          value: "9.8",
        },
        {
          title: "Морозостойкость",
          value: "35",
        },
        {
          title: "Расход, шт/м2",
          value: "26",
        },
        {
          title: "Кол-во на поддоне, шт",
          value: "224",
        },
        {
          title: "Кол-во на машине 20 т, шт",
          value: "4032",
        },
        {
          title: "Цвет",
          value: "Красный",
        },
      ],
      charac: {
        title: [
          { title: "Категория" },
          { title: "Производитель" },
          { title: "Марка прочности" },
          { title: "Размер, мм" },
          { title: "Вес, кг" },
          { title: "Водополгащение, %" },
          { title: "Морозостойкость" },
          { title: "Расход, шт/м2" },
          { title: "Кол-во на поддоне, шт" },
          { title: "Кол-во на машине 20 т, шт" },
          { title: "Цвет" },
        ],
        value: [
          { value: "Кирпич" },
          { value: "Багдановичское ОАО “Огнеупоры" },
          { value: "M2039" },
          { value: "250*120*65" },
          { value: "5.8" },
          { value: "9.8" },
          { value: "35" },
          { value: "26" },
          { value: "224" },
          { value: "4032" },
          { value: "Красный" },
        ],
      },
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "45",
      cap: capimg3,
    },
    {
      id: 1,
      title: "Кирпич облицовочный M96",
      adress: "Воткинский",
      longdesc:
        "На кирпич и камень керамические общие технические условия и стандарты качества, установленные ГОСТ. Эти материалы обладают высокой прочностью, морозостойкостью, негорючестью, небольшая теплопроводность, влагостойкостью. продольное и поперечное. ",
      img: img,
      sec: {
        det1: img2,
        det2: img3,
        det3: img4,
        det4: img5,
        det5: img6,
      },
      char: [
        {
          title: "Категория",
          value: "Кирпич",
        },
        {
          title: "Производитель",
          value: "Багдановичское ОАО “Огнеупоры",
        },
        {
          title: "Марка прочности",
          value: "M2039",
        },
        {
          title: "Размер, мм",
          value: "250*120*65",
        },
        {
          title: "Вес, кг",
          value: "5.8",
        },
        {
          title: "Водополгащение, %",
          value: "9.8",
        },
        {
          title: "Морозостойкость",
          value: "35",
        },
        {
          title: "Расход, шт/м2",
          value: "26",
        },
        {
          title: "Кол-во на поддоне, шт",
          value: "224",
        },
        {
          title: "Кол-во на машине 20 т, шт",
          value: "4032",
        },
        {
          title: "Цвет",
          value: "Красный",
        },
      ],
      charac: {
        title: [
          { title: "Категория" },
          { title: "Производитель" },
          { title: "Марка прочности" },
          { title: "Размер, мм" },
          { title: "Вес, кг" },
          { title: "Водополгащение, %" },
          { title: "Морозостойкость" },
          { title: "Расход, шт/м2" },
          { title: "Кол-во на поддоне, шт" },
          { title: "Кол-во на машине 20 т, шт" },
          { title: "Цвет" },
        ],
        value: [
          { value: "Кирпич" },
          { value: "Багдановичское ОАО “Огнеупоры" },
          { value: "M2039" },
          { value: "250*120*65" },
          { value: "5.8" },
          { value: "9.8" },
          { value: "35" },
          { value: "26" },
          { value: "224" },
          { value: "4032" },
          { value: "Красный" },
        ],
      },
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "45",
      cap: capimg3,
    },
  ],
  cart: [],
};
const generateSlug = (title) => {
  return title.replace(/\s+/g, "-").toLowerCase();
};

const produ = initialState.prod;

produ.forEach((item) => {
  item.slug = generateSlug(item.title);
});

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export default productReducer;
