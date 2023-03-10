import React from "react";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Pay } from "../components/Pay";
import { ShopGame } from "../components/ShopGame";
import { WhyUse } from "../components/WhyUse";

export const HomePage = () => {
  return (
    <div>
      <Pay />
      <Categories />
      <ShopGame />
      <WhyUse />
      <Footer />
    </div>
  );
};
