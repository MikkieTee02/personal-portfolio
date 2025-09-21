"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Reviews = () => {
  return (
    <div className="py-16">
      <h2 className="text-teal-400 text-center text-xl md:text-3xl xl:text-4xl font-medium mb-4">
        What my clients say
      </h2>


        {/*underline*/}

       <div
        className="absolute left-1/2  transform -translate-x-1/2 h-1 w-40 flex z-0 rounded-md"
        aria-hidden="true"
      >
        
        <div className="w-1/4 bg-gray-700 "></div>
        <div className="w-1/2 bg-yellow-400"></div>
         <div className="w-1/4 bg-gray-700"></div>
      </div>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCard image="/images/Mikaela.svg" name="Mikkie" role="Designer" />
          <ReviewCard image="/images/Mikaela.svg" name="Kayla" role="Teacher" />
          <ReviewCard image="/images/Mikaela.svg" name="Hames" role="CEO " />
          <ReviewCard image="/images/Mikaela.svg" name="Sam" role="Developer" />
          <ReviewCard image="/images/Mikaela.svg" name="Monica" role="Designer" />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default Reviews;
