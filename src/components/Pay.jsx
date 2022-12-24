import React from "react";
import { Link } from "react-router-dom";
import ios from "../assets/img/ios.png";
import android from "../assets/img/android.png";
import logobg from "../assets/img/bgimage.png";
import { motion } from "framer-motion";

export const Pay = () => {
  const visibleView = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      viewport={{ amount: 0.2 }}
      style={{
        background: `url(${logobg})`,
        backgroundSize: "cover",
        borderTopRightRadius: "20px",
      }}
      className="p-8 h-screen max-[1020px]:bg-right-top max-[420px]:h-auto"
    >
      <div>
        <div className="container">
          <motion.h1
            className="text-200px max-w-3xl text-center max-[1020px]:text-120px  max-[768px]:text-100px max-[420px]:text-5xl"
            variants={visibleView}
            custom={1}
          >
            Pay your way
          </motion.h1>
        </div>
        <motion.div custom={2} variants={visibleView}>
          <p
            className="max-w-xs text-gray-400 max-[1020px]:mt-28 max-[420px]:mt-10"
            whileHover={{
              scale: 1.1,
              color: "black",
            }}
          >
            Aaand... it’s here! Shop exclusive deals and discounts, split
            payments and manage orders all in one place with the cashew app.
            Download now!
          </p>
        </motion.div>
        <motion.div
          className="flex gap-2 mt-5"
          whileInView="visible"
          initial="hidden"
        >
          <Link to="/">
            <motion.img src={ios} alt="ios" custom={3} variants={visibleView} />
          </Link>
          <Link to="/">
            <motion.img
              src={android}
              alt="android"
              custom={3}
              variants={visibleView}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
