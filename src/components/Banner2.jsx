import React from "react";
import { motion } from "framer-motion";

import one from "../assets/binance.png";
import Two from "../assets/airbnb.png";
import Three from "../assets/dropbox.png";
import Four from "../assets/coinbase.png";

const logos = [one, Two, Three, Four];

const Banner2 = () => {
  return (
    <div className="w-full overflow-hidden py-4 mt-10">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* 2× Repeat for Seamless Loop */}
        {[...logos, ...logos].map((img, i) => (
          <img key={i} src={img} className="h-12 w-auto inline-block" alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Banner2;
