import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { FaHamburger } from "react-icons/fa";
const menu = ["Ways to pay", "Shop", "For business"];

export const Header = () => {
  const [active, setActive] = useState(false);
  const [isSelected, setIsSelected] = useState(0);

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
      <div className="justify-between flex items-center py-6 container mx-auto">
        <div>
          <motion.img
            src={logo}
            alt="logo"
            initial={{ scale: 1 }}
            animate={{ scale: 1.4 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div>
          <div className="flex ">
            <div className="hidden">
              <FaHamburger
                onClick={() => setActive(!active)}
                className="cursor-pointer "
                size={32}
              />
              <div className="flex absolute list-none flex-col top-20 z-50">
                {active &&
                  menu.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={menuList}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                    >
                      {item}
                    </motion.li>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex gap-8">
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
        <div className="gap-4 flex">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg"
            >
              Merchant login
            </motion.button>
          </Link>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-black text-white p-2 rounded-lg"
            >
              Customer login
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};
