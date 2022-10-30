import React from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" relative before:bg-gradient-to-r before:from-purple-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 h-[500px]   ">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt=""
          />
        </div>
      </Slider>

      <div className="absolute top-0 left-0 flex justify-between items-center  translate-x-0 h-full  z-20 ">
        <div className="m-20 items-center">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar İçinde <br /> Kapınızda <br />
          </h3>
        </div>

        <div className="w-full rounded-lg bg-gray-50  p-6 ml-[550px]">
          <h4 className="text-purple-500 text-center font-bold mb-4">
            Giriş Yap veya Kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2 justify-center ">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
            </div>
            <label className="flex-1 relative group block cursor-pointer">
              <input
                required
                className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
            <button className="bg-yellow-400 text-purple-700 font-semibold p-3 hover:bg-purple-700 hover:text-yellow-400">Telefon numarası ile devam et</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
