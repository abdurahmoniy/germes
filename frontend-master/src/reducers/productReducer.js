import img from "../assets/1.png";
import capimg1 from "../assets/Icons/capimg1.png";
import capimg2 from "../assets/Icons/capimg2.png";
import capimg3 from "../assets/Icons/capimg3.png";

const initialState = {
  prod: [
    {
      id: 1,
      title: "Кирпич облицовочный M96 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
      productCode: 1,
      type: "Brick",
    },
    {
      id: 2,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 3,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 4,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 5,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 6,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
    {
      id: 7,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg2,
      url: "#",
    },
    {
      id: 8,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg1,
      url: "#",
    },
    {
      id: 9,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      url: "#",
    },
    {
      id: 10,
      title: "Кирпич облицовочный M95 Воткинский",
      img: img,
      desc1: "Кол-во на поддоне, шт. - 297",
      desc2: "Формат одинарный",
      price: "4500",
      cap: capimg3,
      url: "#",
    },
  ],
  cart: [],
};
const generateSlug = (title) => {
  return title.replace(/\s+/g, "-").toLowerCase();
};

const produ = initialState.prod

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
