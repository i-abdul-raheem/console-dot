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
import { Padding } from "../../utils";

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
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column-reverse",
              xs: "column-reverse",
            },
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
              padding: "1rem",
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
              <Image
                src={MainLogo}
                alt="logo"
                style={{ width: "50px", height: "50px" }}
              />
              <div style={{ paddingBottom: "64px" }}>
                <h1>ConssoelDot</h1>
                <span style={{ fontSize: "20px", textAlign: "center" }}>
                  ConssoelDot represents the connected world, offering
                  innovative and customer-centric information technology
                  experiences, enabling Enterprises, Associates and the Society
                  to Rise™.
                </span>
              </div>
              <Divider />
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
          {/* Side Nav of header */}
          <Box sx={{ padding: "32px", backgroundColor: "rgb(23 , 96 , 128 )" }}>
            <ul>
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
                Work@ ConsoleDot
              </StyledMenuList>
              <StyledMenuList
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
                Blogs
              </StyledMenuList>
              <StyledMenuList
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
                Resources
              </StyledMenuList>
              <StyledMenuList
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
                Customer Reviews
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
