import { CardSection } from "../CccSection/elements";
import {
  DigiContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";

export const DigitalTransformation = () => {
  return (
    <>
      <DigiContainer>
        <SectionTitleDescrip>
          <SectionTitle>Digital Transformations</SectionTitle>
          <SectionDescrip>
            Let us help you kick-start your digital transformation journey with
            human-centric digital experiences
          </SectionDescrip>
        </SectionTitleDescrip>
        <div style={{ backgroundColor:'whitesmoke' }}>
          <div style={{ display: "flex", marginBottom: "10px" ,padding:'10px'}}>
            <div
              style={{
                width: "25%",
                height: "300px",
                margin: "10px 4px 0  0",
                backgroundColor: "white",
              }}
            ></div>
            <div
              style={{
                width: "25%",
                height: "300px",
                margin: "10px 4px 0  0",
                backgroundColor: "white",
              }}
            ></div>
            <div
              style={{
                width: "25%",
                height: "300px",
                margin: "10px 4px 0  0",
                backgroundColor: "white",
              }}
            ></div>
            <div
              style={{
                width: "25%",
                height: "300px",
                margin: "10px 4px 0  0",
                backgroundColor: "white",
              }}
            ></div>
          </div>
          
        </div>
        <CardSection></CardSection>
      </DigiContainer>
    </>
  );
};
