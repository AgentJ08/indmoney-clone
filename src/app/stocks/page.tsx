import Image from "next/image";
import Hero from "../components/stocks/hero";
import Indices from "../components/stocks/indices";
import Collections from "../components/stocks/collections";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 ">
      <Hero />
      <Indices />
      <Collections />
    </div>
  );
}
