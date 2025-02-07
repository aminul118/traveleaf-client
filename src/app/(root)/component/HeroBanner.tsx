"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel
        showThumbs={false} // Enables thumbnails below
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
      >
        <div>
          <Image
            className="object-cover"
            src="/Home/carousel1.png"
            alt="Carousel Image 1"
            height={1200}
            width={1900}
          />
        </div>
        <div>
          <Image
            src="/Home/carousel2.png"
            alt="Carousel Image 2"
            height={600}
            width={1900}
          />
        </div>
        <div>
          <Image
            src="/Home/carousel3.png"
            alt="Carousel Image 3"
            height={600}
            width={1900}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
