import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import img1 from "../../assets/carusel/1.png";
import img2 from "../../assets/carusel/2.png";
import img3 from "../../assets/carusel/3.png";
import img4 from "../../assets/carusel/4.png";
import img5 from "../../assets/carusel/5.png";
import img6 from "../../assets/carusel/6.png";
import Carousel from "../../components/Carousel";
import GalleryCarousel from "../../components/GalleryCarousel";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (index) => {
    setSelectedProject(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const first = [
    {
      id: 1,
      carusel: [
        {
          img: img1,
        },
        {
          img: img3,
        },
        {
          img: img2,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 2,
      carusel: [
        {
          img: img3,
        },
        {
          img: img2,
        },
        {
          img: img1,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 3,
      carusel: [
        {
          img: img2,
        },
        {
          img: img1,
        },
        {
          img: img3,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 4,
      carusel: [
        {
          img: img2,
        },
        {
          img: img1,
        },
        {
          img: img3,
        },
        {
          img: img4,
        },
        {
          img: img5,
        },
        {
          img: img6,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 5,
      carusel: [
        {
          img: img2,
        },
        {
          img: img1,
        },
        {
          img: img3,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
    {
      id: 6,
      carusel: [
        {
          img: img2,
        },
        {
          img: img1,
        },
        {
          img: img3,
        },
      ],
      title: "Аэропорт Казань",
      desc: "Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке.",
      url: "#",
    },
  ];
  return (
    <div>
      <TopBar />
      <div className="font-semibold text-[30px] py-4">Проекты</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:p-10 gap-y-5">
        {first.map((item, index) => (
          <div
            className="relative"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="zind w-[150px] sm:w-[240px] lg:w-[350px] xl:w-[430px] sm:h-[260px] h-[120px]">
              <Carousel object={item.carusel.map((imgObj) => imgObj.img)} />
            </div>
            <div
              className="hoverContent w-[150px] sm:w-[240px] lg:w-[350px] xl:w-[430px] h-[93px] sm:h-[146px] lg:h-[213px] xl:h-[262px]
               bg-[#5661CBE5] text-white rounded-lg flex items-center out_off absolute top-0 left-0"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                visibility: hoveredIndex === index ? "visible" : "hidden",
                transition: "opacity 0.5s, visibility 0.5s",
              }}
            >
              <div className="block">
                <div className="text-[12px] md:text-[22px] xl:my-4 my-2">
                  {item.title}
                </div>
                <div className="text-[10px] md:text-[14px] xl:py-6 py-2 hidden sm:block">
                  {item.desc}
                </div>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(index);
                  }}
                  className="showModal hidden md:block text-[12px] rounded p-2 border border-white"
                >
                  Смотреть галерею
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && selectedProject !== null && (
        <div className="modalBackdrop z-20">
          <div className="modalContent">
            <div className="carouselContainer">
              <div className="modalDetails">
                <div className="modalTitle text-[35px] font-bold text-white">
                  {first[selectedProject].title}
                </div>
                <div className="modalDesc text-white text-[20px] py-2">
                  {first[selectedProject].desc}
                </div>
              </div>
              <GalleryCarousel
                object={first[selectedProject].carusel.map(
                  (imgObj) => imgObj.img
                )}
              />
            </div>
          </div>
          <button className="closeModalButton absolute text-white text-[40px] top-0 right-0 m-5" onClick={closeModal}>
            <i class="fa fa-x" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
  );
}
