import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import phoneImage from "../assets/phone.png";
import iphone from "../assets/14pro.jpg"

export default function HeaderSlider() {
  const slides = [
    {
      title: "Siz kutgan Xiaomi 12 Mi Laite",
      description:
        "Orginal lik va qulay narxni o‘zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
      image: phoneImage,
    },
    {
      title: "iPhone 14 Pro Max",
      description:
        "Mukammal dizayn va kuchli texnologiya bilan jihozlangan iPhone 14 Pro Max sizni hayratga soladi!",
      image:iphone,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-12 w-full h-[500px]">
            <div className="md:w-1/2 text-left max-w-[600px] px-6">
              <h2 className="text-5xl font-bold text-gray-900">{slide.title}</h2>
              <p className="text-gray-600 mt-4 text-lg">{slide.description}</p>
              <button className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg">
                Batafsil
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-h-[400px] w-auto object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
