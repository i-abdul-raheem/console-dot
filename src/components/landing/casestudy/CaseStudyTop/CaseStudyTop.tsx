import { url } from "inspector";
import { useEffect } from "react";
import { CaseStudyContainer } from "./elements";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";

export const CaseStudyTop = () => {
  useEffect(() => {
   const element= document.getElementById("__next")
   if(element)
   {
    element.style.width="100%";
   }
  }, []);
  return (
    <>
      <div style={{marginBottom:'64px'}}>
        <CaseStudyContainer>
          <StyledText
            style={{
              color: "#fff",
              fontSize: "50px",
              fontWeight: "bold",
              textAlign: "center",
              paddingBottom: "20px",wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Case Study
          </StyledText>
          <StyledText
            style={{
              color: "#fff",
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            We helped to empower brands with product growth in digital
            transformation.
          </StyledText>
        </CaseStudyContainer>
      </div>
    </>
  );
};
