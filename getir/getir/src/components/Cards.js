import React from "react";

function Cards() {
  return (
    <div className="w-11/12 rounded-xl flex mx-auto mt-10 py-8  ">
      <div className="flex flex-row   px-14 py-14  ">
        <div className="bg-gray-100 flex flex-col items-center  ">
          <img
            src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
            alt=""
          />
          <span className="text-purple-700 pt-5 font-semibold text-m flex flex-col ">
            Her siparişinize bir <span className="text-center font-bold">kampanya</span>
          </span>
          <span className="text-gray-700 text-sm text-center mt-3">
            Getir’de vereceğiniz her <br /> siparişe uygun bir kampanya <br />{" "}
            bulabilirsiniz.
          </span>
        </div>


        <div className="bg-gray-100 flex flex-col items-center mx-52">
          <img
            src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
            alt=""
          />
          <span className="text-purple-700 pt-5 font-semibold text-m flex flex-col ">
          Dakikalar içinde kapınızda
          </span>
          <span className="text-gray-700 text-sm text-center mt-3">
          Getir’le siparişiniz dakikalar <br /> içinde kapınıza gelir.
          </span>
        </div>

        <div className="bg-gray-100 flex flex-col items-center ">
          <img
            src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
            alt=""
          />
          <span className="text-purple-700 pt-5 font-semibold text-m flex flex-col ">
          Binlerce çeşit mutluluk
          </span>
          <span className="text-gray-700 text-sm text-center mt-3 ">
          Getir’de binlerce çeşit <br />  arasından seçiminizi   <br />yapabilirsiniz.
          </span>
        </div>







      </div>
    </div>
  );
}

export default Cards;
