import { useEffect } from "react";
import { ProductsHeadingText } from "./elements";
import {
  Box,
  CardMedia,
  Container,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { Type } from "typescript";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Dark, H1, H2, HeadFont, Padding, Primary, SubFont } from "../../utils";
import { Tech } from "@/assets";
interface Types {
  sideImage: any;
}

export const ProductsTop = ({ sideImage }: Types) => {
  const backgroundImageUrl =
    "url(https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)";
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        padding: "32px",
        position: "relative",
        backgroundImage: `${backgroundImageUrl}`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          opacity: 0.5,
        },
      }}
    >
      <Container
        sx={{
          zIndex: 1,
          maxWidth: "100%",
          display: "flex",
          gap: "10px",
          padding: {
            xl: "2rem",
            lg: "1.8rem",
            md: "1.7rem",
            sm: "1.5rem",
            xs: "0rem",
          },
        }}
      >
        <Box
          sx={{
            width: { xl: "70%", lg: "70%", md: "70%", sm: "100%", xs: "100%" },
          }}
        >
          <H1
            sx={{
              textAlign: "left",
              color: "white",
              mb: 3,
            }}
          >
            Hire React Developer on Hourly or Monthly Basis
          </H1>
          <H2
            variant="h2"
            sx={{
              textAlign: "left",
              color: "white",
              mb: 3,
            }}
          >
            Hire AngularJS developer from us to build a secure, scalable, and
            reliable web app. Our front-end Angular experts have incorporated
            expertise in all the Angular versions from version 2.0.0 to 15.0.0
            as our mainstream front-end technology. Join the front-end
            revolution with our 80+ senior Angular developers.
          </H2>
          <Box sx={{ display: "flex" }}>
            <Stack
              sx={{
                width: "20ch",
              }}
              component="form"
              spacing={2}
              noValidate
              autoComplete="on"
            >
              <TextField
                sx={{ backgroundColor: "white" }}
                hiddenLabel
                id="filled-hidden-label-normal"
                // defaultValue="Email Adress"
                label="email@example.com"
              />
            </Stack>
            <Button
              sx={{
                backgroundColor: Primary,
                color: "white",
                fontWeight: "bold",
                borderLeft: "none",
                borderTopLeftRadius: "none",
                borderBottomLeftRadius: "none",
                "&:hover": {
                  bgcolor: Dark,
                },
              }}
            >
              Hire Developer
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                fontSize: {
                  xl: "2rem",
                  lg: "1.8rem",
                  md: "1.7rem",
                  sm: "1rem",
                  xs: "1rem",
                },
              }}
            >
              <BusinessCenterIcon sx={{ color: "white" }} />
              <h6>11+ Years of Experience </h6>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                fontSize: {
                  xl: "2rem",
                  lg: "1.8rem",
                  md: "1.7rem",
                  sm: "1rem",
                  xs: "1rem",
                },
              }}
            >
              <SettingsIcon sx={{ color: "white" }} />
              <h6>React Upgrade Service</h6>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
                fontSize: {
                  xl: "2rem",
                  lg: "1.8rem",
                  md: "1.7rem",
                  sm: "1rem",
                  xs: "1rem",
                },
              }}
            >
              <PersonAddAltIcon sx={{ color: "#white" }} />
              <h6>15 Days Risk Free Trial</h6>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xl: "30%", lg: "30%", md: "30%", sm: "0", xs: "0" },
            justifyContent: "center",
            alignItems: "center",
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={
              sideImage?.src||`https://api.consoledot.com/file${sideImage}`
            }
          />
        </Box>
      </Container>
    </Box>
  );
};
