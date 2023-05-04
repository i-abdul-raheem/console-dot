import Image from "next/image";
import {
  AboutUsContainer,
  BoxLabel,
  BoxText,
  DetailRow,
  DetailRowBox,
  PicContainerContentSection,
  PicSection,
  PicSectionContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";
import { Pic1 } from "@/assets";

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <SectionTitleDescrip>
        <SectionTitle>ABOUT US</SectionTitle>
        <SectionDescrip>
          A global leader in next-generation digital services and consulting
        </SectionDescrip>
      </SectionTitleDescrip>
      <DetailRow>
        <DetailRowBox>
          <BoxLabel>12+</BoxLabel>
          <BoxText >
            Countries Where We Have Happy Customers
          </BoxText>
        </DetailRowBox>
        <DetailRowBox>
          <BoxLabel>1050+</BoxLabel>
          <BoxText >Agile Enabled Employees</BoxText>
          </DetailRowBox>
        <DetailRowBox>
          <BoxLabel>06</BoxLabel>
          <BoxText >Worldwide Office</BoxText>
          </DetailRowBox>
        <DetailRowBox>
          <BoxLabel>05</BoxLabel>
          <BoxText >Agile Coaches</BoxText>
          </DetailRowBox>
          <DetailRowBox>
          <BoxLabel>14</BoxLabel>
          <BoxText >Certified Scrum Masters</BoxText>
          </DetailRowBox>
        </DetailRow>

      <PicSectionContainer>
        <PicSection>
          
          <Image src={Pic1} alt="Image" width={560} height={560}/>

          </PicSection>
        <PicContainerContentSection>
          <h2>Agile, A Process Delivering Values & Successful Products</h2>
          <h4>Knowledge @Insights Success Magazine</h4>
          <p>
            Bacancy represents the connected world, offering innovative and
            customer-centric information technology experiences, enabling
            Enterprises, Associates and the Society to Rise™.
          </p>
          </PicContainerContentSection>
      </PicSectionContainer>
    </AboutUsContainer>
  );
};
