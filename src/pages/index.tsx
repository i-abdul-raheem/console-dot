import { CccSection, DigitalTransformation, FortuneClients, InquireSection } from "@/components";
import { AboutUs } from "@/components/landing/AboutUs";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { RightPanel } from "@/components/landing/RightPanel";

export default function Home() {
  return (
    <>
     <Header/>
     <RightPanel/>
     <CccSection/>
     <DigitalTransformation/>
     <AboutUs/>
     <FortuneClients/>
     <InquireSection/>
     <Footer/>
     
     </>
  )
}
