import React from "react";
import mac from "../assets/img/mac.png";
import shoes from "../assets/img/shoes.png";
import dyxi from "../assets/img/dyxi.png";
import flower from "../assets/img/flower.png";
import { motion } from "framer-motion";

const ButtonLink = ({ title }) => {
  const categoriesView = {
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
    <motion.button
      className="absolute border border-violet-400 rounded-3xl p-2 text-violet-400 z-50 bottom-4 left-2"
      whileInView="visible"
      initial="hidden"
      variants={categoriesView}
      custom={1}
    >
      {title}
    </motion.button>
  );
};

export const Categories = () => {
  const categoriesView = {
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
    <motion.div whileInView="visible" initial="hidden" className="py-4">
      <motion.h2 className="text-80px" variants={categoriesView} custom={1}>
        Categories
      </motion.h2>
      <motion.div
        className="flex flex-auto items-center gap-6 justify-center "
        whileInView="visible"
        initial="hidden"
      >
        <motion.div className="relative">
          <motion.img
            src={mac}
            alt="mac"
            variants={categoriesView}
            custom={2}
          />
          <ButtonLink title="Electronics" />
        </motion.div>
        <motion.div
          className="flex flex-col gap-2"
          whileInView="visible"
          initial="hidden"
        >
          <motion.div className="relative">
            <motion.img
              src={shoes}
              alt="sd"
              variants={categoriesView}
              custom={3}
            />
            <ButtonLink title="Fashion & accessories" />
          </motion.div>
          <motion.div className="relative">
            <motion.img
              src={dyxi}
              alt="sd"
              variants={categoriesView}
              custom={3}
            />
            <ButtonLink title="Beauty & health" />
          </motion.div>
        </motion.div>
        <motion.div className="relative">
          <motion.img
            src={flower}
            alt="sd"
            variants={categoriesView}
            custom={4}
          />
          <ButtonLink title="Home & furniture" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
