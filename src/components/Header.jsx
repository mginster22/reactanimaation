import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import { motion } from "framer-motion";
import { FaHamburger } from "react-icons/fa";
const menu = ["Ways to pay", "Shop", "For business"];

export const Header = () => {
  const [active, setActive] = useState(false);

  const menuList = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="  shadow-2xl">
      <div className="justify-between flex items-center py-6 container mx-auto max-[420px]:px-8">
        <div className="max-[420px]:w-16 max-[768px]:w-24">
          <motion.img
            src={logo}
            alt="logo"
            initial={{ scale: 1 }}
            animate={{ scale: 1.4 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div>
          <div className="flex gap-8 max-[420px]:hidden max-[768px]:hidden">
            {menu.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                }}
                className="cursor-pointer list-none relative"
              >
                {item}
              </motion.li>
            ))}
          </div>
        </div>
        <div className="gap-4 flex max-[420px]:flex-col  max-[420px]:gap-0 max-[420px]:-translate-x-6">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg max-[420px]:w-30 max-[420px]:text-xs"
            >
              Merchant login
            </motion.button>
          </Link>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-black text-white p-2 rounded-lg max-[420px]:w-30 max-[420px]:text-xs  "
            >
              Customer login
            </motion.button>
          </Link>
        </div>
        <div className="hidden max-[420px]:block  max-[768px]:block relative">
          <FaHamburger
            onClick={() => setActive(!active)}
            className="cursor-pointer "
            size={26}
          />
          <div className=" absolute top-10 z-50 -right-1 max-w-2xl">
            {active &&
              menu.map((item, index) => (
                <motion.p
                  key={index}
                  variants={menuList}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="text-md w-24"
                >
                  {item}
                </motion.p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
