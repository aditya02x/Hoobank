import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import quotes from "../assets/quotes.svg";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

import pep1 from "../assets/people01.png";
import pep2 from "../assets/people02.png";
import pep3 from "../assets/people03.png";

// modules
import { Pagination } from "swiper/modules";

export default function Cardswipe() {
  const people = [
    {
      img: pep1,
      name: "Amit Sharma",
      role: "UI/UX Designer",
    },
    {
      img: pep2,
      name: "Riya Verma",
      role: "Marketing Head",
    },
    {
      img: pep3,
      name: "Sahil Khan",
      role: "Product Manager",
    },
    {
      img: pep1,
      name: "Neha Singh",
      role: "Business Analyst",
    },
    {
      img: pep2,
      name: "Vikas Rao",
      role: "Senior Developer",
    },
    {
      img: pep3,
      name: "Priya Mehta",
      role: "Content Strategist",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10 mt-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {people.map((p, index) => (
          <SwiperSlide
            key={index}
            className="hover:bg-gradient-to-r from-slate-600 via-slate-800 to-slate-900 
            transition-all duration-500 p-5 flex flex-col items-center justify-between 
            rounded-xl text-xl text-white shadow-lg min-h-[350px]"
          >
            {/* Top Quote + Text */}
            <div className="up text-center">
              <img src={quotes} alt="" className="mx-auto" />
              <p className="mt-3 text-white text-lg font-normal">
                Money is only a tool. It will take you wherever you wish, 
                but it will not replace you as the driver.
              </p>
            </div>

            {/* Bottom Profile */}
            <div className="down w-full mt-6">
              <div className="one flex gap-4 items-center p-4 rounded-2xl bg-slate-800/40">
                <div className="icon flex-shrink-0">
                  <img src={p.img} alt={p.name} className="w-14 h-14 rounded-full" />
                </div>

                <div className="text">
                  <h1 className="text-white text-xl font-semibold">{p.name}</h1>
                  <p className="text-gray-400">{p.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
