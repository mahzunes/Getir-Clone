import React from "react";

function Footer() {
  return (
    <div className="w-11/12 rounded-xl flex  mx-auto  ">
      <div className="flex  justify-between   px-10 py-10">
        <div className="bg-gray-100 flex flex-col items-start">
          <span className="font-bold text-purple-700 text-lg">
            Getir'i indirin!
          </span>
          <div className="flex flex-col pt-5 justify-start ">
            <img
              className="mb-5"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
            <img
              className="mb-5"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </div>
        </div>

        <div className="bg-gray-100 flex flex-row items-start px-20  ">
          <div>
            <span className="font-bold text-purple-700 text-lg">
              Getir'i keşfedin
            </span>
            <ul className="text-sm text-gray-600 py-5 ">
              <li className="mb-3">Hakkımızda</li>
              <li className="mb-3">Kariyer</li>
              <li className="mb-3">Teknoloji Kariyerleri</li>
              <li className="mb-3">İletişim</li>
              <li>Sosyal Sorumluluk Projeleri</li>
            </ul>
          </div>

          <div className="px-20">
            <span className="font-bold text-purple-700 text-lg">
              Yardıma mı ihtiyacınız var?
            </span>
            <ul className="text-sm text-gray-600 py-5">
              <li className="mb-3">Sıkça Sorulan Sorular</li>
              <li className="mb-3">Kişisel Verilerin Korunması</li>
              <li className="mb-3">Gizlilik Politikası</li>
              <li className="mb-3">Kullanım Koşulları</li>
              <li>Çerez Politikası</li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-purple-700 text-lg">
              İş Ortağımız Olun
            </span>
            <ul className="text-sm text-gray-600 py-5">
              <li className="mb-3">Bayimiz Olun</li>
              <li className="mb-3">Deponuzu Kiralayın</li>
              <li className="mb-3">GetirYemek Restoranı Olun</li>
              <li className="mb-3">GetirÇarşı İşletmesi Olun</li>
              <li>Zincir Restoranlar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
