import Image from "next/image";
import HeroPage from "./Components/HeroPage";
import TrustedBy from "./Components/TrustedBy";
import OurProducts from "./Components/OurProducts";
import Category from "./Components/Category";
import OurStacks from "./Components/OurStacks";
import Timeline from "./Components/Timeline";
import SupplyChain from "./Components/SupplyChain";
import ClientReview from "./Components/ClientReview";
import Blog from "./Components/Blog";
import FAQSection from "./Components/FAQSection";
import TestSection from "./Components/TestSection";
import OurServices from "./Components/OurService";
import Navbar from "./Components/Navbar";
export const userId = 217;
export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  return (
    <div>
      <HeroPage></HeroPage>
      {/* <TestSection></TestSection> */}
      {/* <TrustedBy></TrustedBy> */}
      <OurServices></OurServices>
      {/* <OurProducts></OurProducts> */}
      <Category></Category>
      <OurStacks></OurStacks>
      {/* <Timeline></Timeline> */}
      <SupplyChain></SupplyChain>
      <ClientReview></ClientReview>
      <Blog></Blog>
      <FAQSection></FAQSection>
    </div>
  );
}
