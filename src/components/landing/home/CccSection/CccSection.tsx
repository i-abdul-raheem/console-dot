import { Box, Typography } from "@mui/material";
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
  ColumnInMobile,
} from "./elements";
import { Image0, Image1, Image2, Image4, Image5, Image6, Pic1 } from "@/assets";
import { url } from "inspector";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  Body,
  ContainerPadding,
  H1,
  H2,
  HeadFont,
  Margin,
  Primary,
  SubFont,
  Wrapper,
} from "../../utils";
import { Container } from "@mui/material";
export const CccSection = () => {
  return (
    <Box sx={{ backgroundColor: Body }}>
      <Container sx={{ padding: ContainerPadding }}>
        <CccContainer>
          <SectionTitleDescrip>
            <H1 variant="h1" sx={{ color: Primary }} mb={2}>
              Connect, Collaborate and Create
            </H1>
            <H2 variant="h2" sx={{ color: "black" }}>
              Partner with us to work with on-demand Agile product team. We are
              always committed to your growth.
            </H2>
          </SectionTitleDescrip>
          <ImageSectionContainer>
            <ImageRow>
              <ImageLarge6>
                <ImageSectionContent>
                  <ImageText>ConsoleDot Tech Agility</ImageText>
                  <ArrowRightAltIcon sx={{ color: "white", zIndex: "999" }} />
                </ImageSectionContent>
              </ImageLarge6>

              <ColumnInMobile>
                <ImageSmall3>
                  <ImageSectionContent>
                    <ImageText> ConsoleDot Tech Agility</ImageText>
                    <ArrowRightAltIcon sx={{ color: "white", zIndex: "999" }} />
                  </ImageSectionContent>
                </ImageSmall3>

                <ImageSmall3>
                  <ImageSectionContent>
                    <ImageText> ConsoleDot Tech Agility</ImageText>
                    <ArrowRightAltIcon sx={{ color: "white", zIndex: "999" }} />
                  </ImageSectionContent>
                </ImageSmall3>
              </ColumnInMobile>
            </ImageRow>
            <ImageRow>
              <ColumnInMobile>
                <ImageSmall4>
                  <ImageSectionContent>
                    <ImageText>ConsoleDot Tech Agility</ImageText>
                    <ArrowRightAltIcon sx={{ color: "white", zIndex: "999" }} />
                  </ImageSectionContent>
                </ImageSmall4>
                <ImageSmall5>
                  <ImageSectionContent>
                    <ImageText>ConsoleDot Tech Agility</ImageText>
                    <ArrowRightAltIcon sx={{ color: "white", zIndex: "999" }} />
                  </ImageSectionContent>
                </ImageSmall5>
              </ColumnInMobile>

              <ImageLarge6>
                <ImageSectionContent>
                  <ImageText>ConsoleDot Tech Agility</ImageText>
                  <ArrowRightAltIcon sx={{ color: "white", zIndex: "999" }} />
                </ImageSectionContent>
              </ImageLarge6>
            </ImageRow>
          </ImageSectionContainer>

          <CardSection></CardSection>
        </CccContainer>
      </Container>
    </Box>
  );
};
