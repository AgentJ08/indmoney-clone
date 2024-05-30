import Image from "next/image";
import Hero from "../components/mutual-funds/hero";
import StartSIP from "../components/mutual-funds/startsip";
import TrendingMFs from "../components/mutual-funds/trendingmfs";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 ">
      <Hero />
      <StartSIP />
      <TrendingMFs />
    </div>
  );
}
