import React from "react";
import shopng from "../assets/img/shop.png";
import iphone from "../assets/img/iphone.png";
import swiper from "../assets/img/swiper.svg";
import { motion } from "framer-motion";

const listItem = [
  {
    title: "Step 1",
    subTitle: "See you at checkout",
  },
  {
    title: "Step 2",
    subTitle: "Options! That’s the name of the game",
  },
  {
    title: "Step 3",
    subTitle: "Financial nirvana",
  },
];

export const ShopGame = () => {
  const shopView = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: {
      opacity: 0,
      y: -100,
    },
  };
  const shopViewY = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
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
      style={{ background: `url(${shopng})`, backgroundSize: "cover" }}
      className="p-6"
    >
      <motion.div whileInView="visible" initial="hidden">
        <motion.h1
          className="text-80px max-w-2xl max-[768px]:text-5xl  max-[420px]:text-xl "
          variants={shopView}
          custom={1}
        >
          Step up your shopping game
        </motion.h1>
        <motion.p
          className="max-w-xs text-xl text-gray-400 max-[768px]:text-sm max-[768px]:mt-8"
          variants={shopView}
          custom={3}
        >
          How do you use BNPL? Spread the cost of your payment into installments
          and explore our flexible pay later options.
        </motion.p>
      </motion.div>
      <motion.div
        className="my-8 justify-between flex items-center"
        whileInView="visible"
        initial="hidden"
      >
        <motion.div
          className="flex items-center gap-4"
          whileInView="visible"
          initial="hidden"
        >
          <motion.div whileInView="visible" initial="hidden">
            <motion.img alt="" src={swiper} variants={shopViewY} custom={1} />
          </motion.div>
          <motion.div
            className="flex flex-col gap-16 max-[768px]:gap-16"
            variants={shopViewY}
            custom={1}
          >
            {listItem.map(({ title, subTitle }, index) => (
              <motion.div
                key={index}
                className="flex flex-col "
                whileInView="visible"
                initial="hidden"
              >
                <motion.b
                  className="text-3xl max-[768px]:text-xl"
                  variants={shopViewY}
                  custom={index}
                >
                  {title}
                </motion.b>
                <motion.span
                  variants={shopViewY}
                  custom={index}
                  className="max-[768px]:text-xs  max-[768px]:max-w-120px"
                >
                  {subTitle}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="translate-x-16  max-[768px]:-translate-x-2 max-[420px]:translate-x-2"
          whileInView="visible"
          initial="hidden"
        >
          <motion.h3
            className="text-7xl max-w-xs max-[1020px]:text-5xl max-[768px]:text-2xl  max-[420px]:hidden"
            variants={shopViewY}
            custom={3}
          >
            See you at checkout
          </motion.h3>
          <motion.p
            className="max-w-xs mt-4 text-gray-400 max-[1020px]:w-56  max-[420px]:hidden "
            variants={shopViewY}
            custom={4}
          >
            Shop your favorite brands online or in-store and choose cashew at
            checkout.
          </motion.p>
        </motion.div>
        <div className=" max-[768px]:w-36  max-[420px]:hidden">
          <img src={iphone} alt="iphone" />
        </div>
      </motion.div>
    </motion.div>
  );
};
