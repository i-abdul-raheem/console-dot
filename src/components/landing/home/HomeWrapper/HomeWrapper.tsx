import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { AboutUs } from "../AboutUs";
import { CccSection } from "../CccSection";
import { DigitalTransformation } from "../DigitalTransformation";
import { FortuneClients } from "../FortuneClients";
import { InquireSection } from "../InquireSection";
import { ReasonWhyWeBest } from "../ReasonWhyWeBest";
import { RemoteAgile } from "../RemoteAgile";
import { RightPanel } from "../RightPanel";

export const HomeWrapper = () => {
  return (
    <>
      <Header />
      <RightPanel />
      <AboutUs />
      <CccSection />
      <DigitalTransformation />
      <FortuneClients />
      <ReasonWhyWeBest />
      <RemoteAgile />
      <InquireSection />
      <Footer />
    </>
  );
};
