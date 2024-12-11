import { useEffect } from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import FunFacts from "../components/FunFacts";
import Gallery from "../components/Gallery";
import WorkStep from "../components/WorkStep";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Clothkind";
  }, []);
  return (
    <div>
      <Carousel></Carousel>
      <div className="md:pt-24 pt-12">
        <About></About>
      </div>
      <div className="py-12">
        <WorkStep></WorkStep>
      </div>
      <div className=" lg:py-12">
        <FunFacts></FunFacts>
      </div>
      <div className="py-12">
        <Gallery></Gallery>
      </div>
    </div>
  );
}
