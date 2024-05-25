import Image from "next/image";
import Hero from "../components/mfs/hero";
import StartSIP from "../components/mfs/startsip";
import TrendingMFs from "../components/mfs/trendingmfs";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 ">
      <Hero />
      <StartSIP />
      <TrendingMFs />
    </div>
  );
}
