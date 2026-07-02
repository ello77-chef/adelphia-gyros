import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bestsellers from "@/components/Bestsellers";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Bestsellers />
        <Menu />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}
