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
import {
  ContainerPadding,
  HeadFont,
  Margin,
  Padding,
  Primary,
} from "../../utils";

export const EventsLifeEmp = () => {
  return (
    <Container sx={{ padding: ContainerPadding }}>
      <Typography
        sx={{
    
          fontSize: HeadFont,
          color: Primary,
          textAlign: "center",
        }}
      >
        Life Of ConsoleDot
      </Typography>
      <ComponentContainer>
        <Box sx={{ margin: Margin, padding: Padding }}>
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
              gap: "1rem",
              justifyContent: "space-between",
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
        </Box>
      </ComponentContainer>
    </Container>
  );
};
