import { React, TopTech } from "@/assets";
import Image from "next/image";
import { Heading, StyledPara, TechTopSection} from "./elements";


export const TechTopPage = () => {
  return (
    <>
      <TechTopSection>
        <Heading>
          
          Let&#39;s discuss
          <span style={{ color: "rgb(23 , 96 , 128 )" }}>&lt;/code&gt;</span>
        </Heading>
        <StyledPara>
          
          Whether it&rsquo;s about turning your ideas into profitable software
          solutions or getting the gen-y gung-ho about your fun idea &ndash; We
          provide high quality, cost effective and reliable result oriented web
          applications to help you succeed in rapidly changing tech-driven
          markets.
        </StyledPara>
        <Image
          src={TopTech}
          alt="image"
          style={{ width: "100%", height: "auto" }}
        />
      </TechTopSection>
      
    </>
  );
};
