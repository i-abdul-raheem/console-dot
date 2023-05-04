import Box from "@mui/material/Box";
import {
  CardSection,
  CccContainer,
  ImageLarge1,
  ImageLarge6,
  ImageSmall2,
  ImageSmall3,
  ImageSmall4,
  ImageSmall5,
  ImageSectionContent,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
  ImageText,
  ImageRow,
  ImageSectionContainer,
} from "./elements";
import { Image0, Image1, Image2, Image4, Image5, Image6, Pic1 } from "@/assets";
import { url } from "inspector";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export const CccSection = () => {
  return (
    <>
      <CccContainer>
        <SectionTitleDescrip>
          <SectionTitle>Connect, Collaborate and Create</SectionTitle>
          <SectionDescrip>
            Partner with us to work with on-demand Agile product team. We are
            always committed to your growth.
          </SectionDescrip>
        </SectionTitleDescrip>
        <ImageSectionContainer>
          
          <ImageRow>
            <ImageLarge1>
              <ImageSectionContent>
                <ImageText> ConsoleDot Tech Agility</ImageText>
                <ArrowRightAltIcon />
              </ImageSectionContent>
            </ImageLarge1>
            <ImageSmall2>
              <ImageSectionContent>
                <ImageText> ConsoleDot Tech Agility</ImageText>
                <ArrowRightAltIcon />
              </ImageSectionContent>
            </ImageSmall2>
            <ImageSmall3>
              <ImageSectionContent>
                <ImageText> ConsoleDot Tech Agility</ImageText>
                <ArrowRightAltIcon />
              </ImageSectionContent>
            </ImageSmall3>
          </ImageRow>
          <ImageRow>
            <ImageSmall4>
              <ImageSectionContent>
                <ImageText>ConsoleDot Tech Agility</ImageText>
                <ArrowRightAltIcon />
              </ImageSectionContent>
            </ImageSmall4>
            <ImageSmall5>
              <ImageSectionContent>
                <ImageText>ConsoleDot Tech Agility</ImageText>
                <ArrowRightAltIcon />
              </ImageSectionContent>
            </ImageSmall5>
            <ImageLarge6>
              <ImageSectionContent>
                <ImageText>ConsoleDot Tech Agility</ImageText>
                <ArrowRightAltIcon />
              </ImageSectionContent>
            </ImageLarge6>
          </ImageRow>
        </ImageSectionContainer>

        <CardSection></CardSection>
      </CccContainer>
    </>
  );
};
