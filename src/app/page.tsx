import Image from "next/image";
import Info from "@/app/components/Info"
import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import S1 from "@/app/components/S1"
import S2 from "@/app/components/S2"
import S3 from "@/app/components/S3"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
export default function Home() {
  return (
    <div className="">
      <Info/>
      <Header/>
      <Hero/>
      <About />
      <S1 />
      <S2 />
      <S3 />
      <Contact/>
      <Footer />
      
    </div>
  );
}
