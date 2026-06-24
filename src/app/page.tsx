import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NavbarWrapper from "@/components/NavbarWrapper";

export default function Home() {
  return (
    <>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <HeroSection />
    </>
  );
}
