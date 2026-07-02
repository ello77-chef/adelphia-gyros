import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSlider from "@/components/MenuSlider";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuSlider />
        <Menu />
        <About />
        <Visit />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}
