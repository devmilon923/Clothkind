import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ..
AOS.init({
  startEvent: "DOMContentLoaded",
  duration: 600,
  offset: 120,
  once: false,
});

export default function Main() {
  //   const { sum } = useContext(AuthContext);
  return (
    <div className="bg-gray-50">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar></Navbar>
      <div className="pt-20 overflow-hidden container min-h-[calc(100vh-225px)] mx-auto px-3">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
