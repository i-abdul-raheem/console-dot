import { Header } from "../../Header";
import { InquireSection } from "../../home";
import { MobResWrap } from "../../utils/utils";
import { Mobile } from "../Mobile";
import { ScrollBar } from "../ScrollBar";
import { TechTopPage } from "../TechTopPage";
import { WebFrame } from "../WebFrame";
import { WebTechs } from "../WebTechs";
import { ScrollingControl } from "./elements";

export const TechnologiesWrapper = () => {
  return (
    <>
      <MobResWrap>
      <TechTopPage />
      
        
          <WebTechs />
          <Mobile />
          <WebFrame />
        <div style={{padding:"32px"}}>
        <InquireSection />
        </div>
        </MobResWrap>
    </>
  );
};
