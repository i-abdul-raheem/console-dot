import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Wrapper } from "../../utils";
import { AboutUs } from "../AboutUs";
import { CccSection } from "../CccSection";
import { DigitalTransformation } from "../DigitalTransformation";
import { FortuneClients } from "../FortuneClients";
import { HomePage } from "../HomePage";
import { InquireSection } from "../InquireSection";
import { ReasonWhyWeBest } from "../ReasonWhyWeBest";
import { RemoteAgile } from "../RemoteAgile";
import { RightPanel } from "../RightPanel";

export const HomeWrapper = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      
      <HomePage/>
      
      <AboutUs />
       <CccSection />
      <DigitalTransformation />
      <FortuneClients />
       <ReasonWhyWeBest />
      <RemoteAgile />
      <InquireSection />
    </div>
  );
};
