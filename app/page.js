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
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroPage></HeroPage>
      {/* <TrustedBy></TrustedBy> */}
      <OurProducts></OurProducts>
      <Category></Category>
      <OurStacks></OurStacks>
      {/* <Timeline></Timeline> */}
      <SupplyChain></SupplyChain>
      <ClientReview></ClientReview>
      <Blog></Blog>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </div>
  );
}
