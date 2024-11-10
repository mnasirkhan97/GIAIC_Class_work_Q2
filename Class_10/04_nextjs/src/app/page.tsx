import Image from "next/image";
import Nabvar from "./components/Nabvar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Nabvar />
      <Hero />
      {/* <Nabvar></Nabvar> */}
    </div>
  );
}
