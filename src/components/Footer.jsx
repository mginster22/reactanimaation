import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/img/logo.svg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

export const Footer = () => {
  const listItem = [
    {
      title: "Company",
      subTitle: ["About Us", "T&C’s", "Privacy Policy", "Careers", "Blog"],
    },
    {
      title: "Shoppers",
      subTitle: ["Customer login", "Shop directory", "FAQ"],
    },
    {
      title: "Merchants",
      subTitle: [
        "Merchant login",
        "For business",
        "Ways to pay",
        "Partner with us",
      ],
    },
  ];

  const fotterView = {
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
      className="flex justify-between px-6 py-6 max-[1020px]:gap-8 max-[420px]:flex-col-reverse max-[420px]:px-0"
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className="flex flex-col gap-8">
        <motion.div variants={fotterView} custom={1}>
          <motion.img src={logo} />
        </motion.div>
        <motion.div
          className="flex flex-col gap-2"
          variants={fotterView}
          custom={2}
        >
          <motion.span>+9714 5616811</motion.span>
          <motion.span>support@cashewpayments.com</motion.span>
        </motion.div>
        <motion.div
          className="flex gap-4 mt-10"
          variants={fotterView}
          custom={3}
        >
          <AiFillFacebook size={32} />
          <AiFillLinkedin size={32} />
          <AiFillInstagram size={32} />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex  gap-12"
        initial="hidden"
        whileInView="visible"
      >
        {listItem.map(({ title, subTitle }, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-8"
            variants={fotterView}
            custom={index}
          >
            <motion.h5 className="text-xl">{title}</motion.h5>
            {subTitle.map((item, index) => (
              <motion.p
                className="text-sm text-gray-400 flex flex-col gap-8"
                key={index}
                variants={fotterView}
                custom={index}
              >
                {" "}
                {item}
              </motion.p>
            ))}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="px-4 max-w-sm w-full"
        variants={fotterView}
        custom={4}
      >
        <h3 className="max-[420px]:text-2xl">Subscribe</h3>
        <label className="mt-12 flex items-center justify-between">
          <input
            type="text"
            className="outline-none"
            placeholder="Enter your email"
          />
          <input type="submit" value="Send" />
        </label>
        <div className="h-1px w-full bg-slate-900 mt-4"></div>
      </motion.div>
    </motion.div>
  );
};
