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
import { HeadFont, Padding, SubFont } from "../../utils";
interface Types {
  sideImage: string;
}

export const ProductsTop = ({ sideImage }: Types) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1421757350652-9f65a35effc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80";
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
          <ProductsHeadingText
            sx={{
              fontSize: HeadFont,
              textAlign: "left",
              padding: Padding,
            }}
          >
            Hire React Developer on Hourly or Monthly Basis
          </ProductsHeadingText>
          <ProductsHeadingText
            sx={{
              fontSize: SubFont,
              textAlign: "left",
              padding: Padding,
            }}
          >
            Hire AngularJS developer from us to build a secure, scalable, and
            reliable web app. Our front-end Angular experts have incorporated
            expertise in all the Angular versions from version 2.0.0 to 15.0.0
            as our mainstream front-end technology. Join the front-end
            revolution with our 80+ senior Angular developers.
          </ProductsHeadingText>
          <Box sx={{ display: "flex" }}>
            <Stack
              sx={{
                width: "25ch",
              }}
              component="form"
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{ backgroundColor: "white" }}
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Email Adress"
              />
            </Stack>
            <Button
              sx={{
                backgroundColor: "#156380",
                color: "white",
                fontWeight: "bold",
                borderLeft: "none",
                borderTopLeftRadius: "none",
                borderBottomLeftRadius: "none",
              }}
            >
              Hire React Developer
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
              <BusinessCenterIcon sx={{ color: "#f58220" }} />
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
              <SettingsIcon sx={{ color: "#f58220" }} />
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
              <PersonAddAltIcon sx={{ color: "#f58220" }} />
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
          <CardMedia component="img" height="300" image={sideImage} />
        </Box>
      </Container>
    </Box>
  );
};
