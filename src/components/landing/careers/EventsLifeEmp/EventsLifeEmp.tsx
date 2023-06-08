import Image from "next/image";
import { Event, Life } from "@/assets";
import {
  ComponentContainer,
  ImageSection,
  Section1,
  SectionButton,
  SectionDescription,
  SectionTitle,
  StyledButton,
} from "./elements";
import { Box, Container, Typography } from "@mui/material";
import MediaCard from "../../MediaCard/MediaCard";
import { HeadFont, Margin, Padding, Primary } from "../../utils";

export const EventsLifeEmp = () => {
  return (
    <Container>
      <Typography
        sx={{
          margin: Margin,
          padding: Padding,
          fontSize: HeadFont,
          color: Primary,
          textAlign: "center",
        }}
      >
        Life Of ConsoleDot
      </Typography>
      <ComponentContainer>
        <Section1 sx={{ margin: Margin, padding: Padding }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <MediaCard title="Events" placeholder="View More"></MediaCard>
            <MediaCard
              title="Life of Condole."
              placeholder="View More"
            ></MediaCard>

            <MediaCard title="Employee" placeholder="View More"></MediaCard>
          </Box>
        </Section1>
      </ComponentContainer>
    </Container>
  );
};
