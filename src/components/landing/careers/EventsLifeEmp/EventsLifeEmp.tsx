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
import { Box, Container } from "@mui/material";
import MediaCard from "../../MediaCard/MediaCard";

export const EventsLifeEmp = () => {
  return (
    <Container>
      <ComponentContainer sx={{ backgroundColor: "#f3f9fb" }}>
        <Section1>
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
