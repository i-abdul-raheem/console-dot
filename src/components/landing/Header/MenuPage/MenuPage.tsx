import Image from "next/image";
import { MenuPageContainer, StyledMenuList } from "./elements";
import { MainLogo } from "@/assets";
import {
  BoxLabel,
  BoxText,
  DetailRow,
  DetailRowBox,
} from "../../home/AboutUs/elements";
import { useRouter } from "next/router";
import { Container, Box, Divider } from "@mui/material";
import { ContainerPadding, H2, Padding } from "../../utils";
import { NameHeading } from "../elements";
const navLogoStyle = (inverse: Boolean) => {
  return {
    color: "#0D7789",
    fontSize: {
      xl: "2.8rem",
      lg: "2rem",
      md: "2rem",
      sm: "2rem",
    },
  };
};
export const MenuPage = () => {
  const router = useRouter();
  return (
    <>
      <MenuPageContainer
        sx={{
          right: { xl: "65px", lg: "65px", md: "65px", sm: " 0", xs: "0" },
        }}
      >
        <Box
          sx={{
            width: { xl: "100%" },
            display: "flex",
            flexDirection: window.innerWidth > 720 ? "row" : "column-reverse",
          }}
        >
          {/* intro of the company */}
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column-reverse",
                xs: "column-reverse",
              },
              width: {
                xl: "50%",
                lg: "50%",
                md: "100%",
                sm: "10%",
                xs: "100%",
              },
              padding: ContainerPadding,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: { xl: "flex", lg: "flex", md: "flex", sm: "flex" },
                flexDirection: "column",
                padding: { xl: "32px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <NameHeading sx={navLogoStyle(true)}>
                  Console
                  <span style={{ color: "#224575", marginRight: "7px" }}>
                    Dot
                  </span>
                </NameHeading>
                <Image
                  src={MainLogo}
                  alt="logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </Box>
              <div style={{ paddingBottom: "64px" }}>
                <H2 variant="h2" sx={{ textAlign: "left" }}>
                  ConssoelDot represents the connected world, offering
                  innovative and customer-centric information technology
                  experiences, enabling Enterprises, Associates and the Society
                  to Rise™.
                </H2>
              </div>
            </Box>
            <Box>
              <DetailRow
                sx={{
                  paddingTop: "32px",
                }}
              >
                <DetailRowBox>
                  <BoxLabel>12+</BoxLabel>
                  <BoxText>Countries Where We Have Happy Customers</BoxText>
                </DetailRowBox>
                <DetailRowBox>
                  <BoxLabel>1050+</BoxLabel>
                  <BoxText>Agile Enabled Employees</BoxText>
                </DetailRowBox>
                <DetailRowBox>
                  <BoxLabel>06</BoxLabel>
                  <BoxText>Worldwide Office</BoxText>
                </DetailRowBox>
                <DetailRowBox>
                  <BoxLabel>05</BoxLabel>
                  <BoxText>Agile Coaches</BoxText>
                </DetailRowBox>
                <DetailRowBox>
                  <BoxLabel>14</BoxLabel>
                  <BoxText>Certified Scrum Masters</BoxText>
                </DetailRowBox>
              </DetailRow>
            </Box>
          </Box>

          <Box
            sx={{
              padding: "20px",
              background: "linear-gradient(to bottom left, #226597, #5D8AA8)",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <ul
              style={{
                textAlign: "center",
              }}
            >
              <StyledMenuList
                onClick={() => router.push("/careers")}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    xl: "2.8rem",
                    lg: "2.5rem",
                    md: "2.3rem",
                    sm: "2rem",
                    xs: "1rem",
                  },
                }}
              >
                Careers
              </StyledMenuList>

              <StyledMenuList
                sx={{
                  fontSize: {
                    cursor: "pointer",
                    xl: "2.8rem",
                    lg: "2.5rem",
                    md: "2.3rem",
                    sm: "2rem",
                    xs: "1rem",
                  },
                }}
              >
                Contact
              </StyledMenuList>
              <StyledMenuList
                onClick={() => router.push("/services")}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    xl: "2.8rem",
                    lg: "2.5rem",
                    md: "2.3rem",
                    sm: "2rem",
                    xs: "1rem",
                  },
                }}
              >
                Services
              </StyledMenuList>
            </ul>
          </Box>
        </Box>
      </MenuPageContainer>
    </>
  );
};
