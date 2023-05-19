import { Header } from "../../Header";
import { InquireSection } from "../../home";
import { Mobile } from "../Mobile";
import { ScrollBar } from "../ScrollBar";
import { TechTopPage } from "../TechTopPage";
import { WebFrame } from "../WebFrame";
import { WebTechs } from "../WebTechs";
import { ScrollingControl } from "./elements";

export const TechnologiesWrapper = () => {
  return (
    <>
      <Header />
      <TechTopPage />
      
        
          <WebTechs />
          <Mobile />
          <WebFrame />
        
        <InquireSection/>
    </>
  );
};
