import {
  TextField,
  Button,
  TextareaAutosize,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { Padding } from "../../utils";

interface props {
  head: string;
  specs: string[];
}

export const technicalExcellences = [
  {
    head: "Theme",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
  {
    head: "Libraries",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
  {
    head: "APIs",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
  {
    head: "Platforms",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
  {
    head: "Framework",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
  {
    head: "Framework",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
  {
    head: "Version Control",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
  {
    head: "Designer Tool",
    specs: ["Fuse", "WordPress", "CleanUI", "CoreUI"],
  },
];

export const TechnicalExcellence = ({ head, specs }: props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#e2f1ff",
        padding: Padding,
      }}
    >
      <Container sx={{ display: "column" }}>
        {technicalExcellences.map((tech, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              marginBottom: 1.6,
              boxShadow: "4px 4px 4px rgba(0, 1, 0, 0.3)",
            }}
            key={index}
          >
            <Box
              sx={{
                backgroundColor: "#156380",
                color: "white",
                fontWeight: "bold",

                textAlign: {
                  xl: "left",
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
                width: {
                  xl: "20%",
                  lg: "20%",
                  md: "20%",
                  sm: "100%",
                  xs: "100%",
                },
                height: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: Padding,
              }}
            >
              {tech?.head}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {tech?.specs?.map((spec, index1) => (
                <Box
                  sx={{
                    borderRight: "1px solid #156380",
                    padding: "8px",
                    display: "inline-block",
                    "&:last-child": {
                      borderRight: "none",
                    },
                  }}
                  key={index1}
                >
                  {spec}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained"> SCHEDULE A DEVELOPER INTERVIEW</Button>
        </Box>
      </Container>
    </Box>
  );
};
