import Image from "next/image";
import HeroPage from "./Components/HeroPage";
import TrustedBy from "./Components/TrustedBy";
import OurProducts from "./Components/OurProducts";
import Category from "./Components/Category";
import OurStacks from "./Components/OurStacks";
import Timeline from "./Components/Timeline";

export default function Home() {
  return (
    <div className="">
      <HeroPage></HeroPage>
      <TrustedBy></TrustedBy>
      <OurProducts></OurProducts>
      <Category></Category>
      <OurStacks></OurStacks>
      <Timeline></Timeline>
    </div>
  );
}
