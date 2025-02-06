import React from "react";
import { ChildrenType } from "../layout";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-7 pt-[68px] min-h-[calc(100vh-224px)]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
