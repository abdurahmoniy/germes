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
      char: {
        category: "Кирпич",
        manufacturer: "Багдановичское ОАО “Огнеупоры”",
        marc: "M2039",
        size: "250*120*65",
        weight: "5.8",
        watersupply: "9.8",
        frostresistance: "35",
        consumption: "26",
        quantityonpallet: "224",
        quantityonmachine: "4032",
        color: "Красный",
      },
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "45",
      cap: capimg3,
    },
    {
      id: 1,
      title: "Кирпич облицовочный M95",
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
      char: {
        category: "Кирпич",
        manufacturer: "Багдановичское ОАО “Огнеупоры”",
        marc: "M2039",
        size: "250*120*65",
        weight: "5.8",
        watersupply: "9.8",
        frostresistance: "35",
        consumption: "26",
        quantityonpallet: "224",
        quantityonmachine: "4032",
        color: "Красный",
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
