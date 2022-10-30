import React from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import { useState, useEffect } from "react";

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <div className="block px-2">
              <img className="rounded-lg" src={banner.image} />
              </div>
            </div> 
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
