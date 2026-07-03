import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
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
        <Menu />
        <Story />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}
