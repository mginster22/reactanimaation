import React from "react";
import { motion } from "framer-motion";
export const WhyUse = () => {
  const list = [
    {
      title: "No interest or hidden costs",
      subTitle:
        "Shop at your favorite brands and divide your payment into interest-free installments.",
    },
    {
      title: "3, 6, and 12 installments",
      subTitle: "3, 6 or 12 installments. Buy now and pay later.",
    },
    {
      title: "Subscription",
      subTitle: "No hassle. No hidden fees. No brainer.",
    },
  ];
  const whyUseView = {
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
      className="my-16 border-b border-black"
      whileInView="visible"
      initial="hidden"
    >
      <motion.div whileInView="visible" initial="hidden" className="p-8">
        <motion.h2 className="text-8xl" variants={whyUseView} custom={1}>
          Why use cashew?
        </motion.h2>
        <motion.p
          className="text-gray-400 text-xl max-w-xs mt-8"
          variants={whyUseView}
          custom={2}
        >
          We’re nuts about payments! Feel the financial flexibility that cashew
          puts at your fingertips. With a valid debit or credit card, you’ll be
          good to go within a few clicks.
        </motion.p>
      </motion.div>
      <motion.div className="flex flex-col gap-9 mt-8 p-8 mb-16">
        {list.map(({ title, subTitle }, index) => (
          <motion.div
            whileInView="visible"
            initial="hidden"
            key={index}
            className="flex flex-col gap-8"
          >
            <motion.span
              className="text-2xl"
              variants={whyUseView}
              custom={index}
            >
              {title}
            </motion.span>
            <motion.p
              className="text-md text-gray-400"
              variants={whyUseView}
              custom={index}
            >
              {subTitle}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
