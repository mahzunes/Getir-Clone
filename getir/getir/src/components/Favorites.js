import React from "react";

function Favorites() {
  return (
    <div className="w-11/12 relative  mx-auto py-8 bg-purple-600 rounded-xl flex justify-between">
      <div className="flex flex-col  px-14 py-14">
        <p className="text-white font-bold text-3xl mb-5">Getiri İndirin</p>
        <p className="text-white font-bold text-m mb-5">
          İstediğiniz ürünler dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <div className="flex mt-8 ">
          <a href="" className="">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
          <a href="" className="px-2">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
          <a href="" className="px-2">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 ">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Favorites;
