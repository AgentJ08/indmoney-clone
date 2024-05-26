import Image from "next/image";
import Hero from "./components/home/hero";
import InvestOptions from "./components/home/investoptions";
import OpenAccount from "./components/home/openaccount";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 ">
      <Hero />
      <InvestOptions />
      <OpenAccount />
    </div>
  );
}
