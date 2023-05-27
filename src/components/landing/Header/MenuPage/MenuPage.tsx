import Image from "next/image";
import { MenuPageContainer, StyledMenuList } from "./elements";
import { MainLogo } from "@/assets";
import {
  BoxLabel,
  BoxText,
  DetailRow,
  DetailRowBox,
} from "../../home/AboutUs/elements";

export const MenuPage = () => {
  return (
    <>
      <MenuPageContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              columnGap: "20px",
              borderBottom: "1px solid #ddd",
              padding:"32px"
            }}
          >
            <Image
              src={MainLogo}
              alt="logo"
              style={{ width: "50px", height: "100px" }}
            />
            <div style={{ paddingBottom: "64px" }}>
              <h1>ConssoelDot</h1>
              <span style={{ fontSize: "20px", textAlign: "center" }}>
                ConssoelDot represents the connected world, offering innovative
                and customer-centric information technology experiences,
                enabling Enterprises, Associates and the Society to Rise™.
              </span>
            </div>
          </div>
          <DetailRow style={{paddingTop:"32px"}}>
            <DetailRowBox>
              <BoxLabel>12+</BoxLabel>
              <BoxText>Countries Where We Have Happy Customers</BoxText>
            </DetailRowBox>
            <DetailRowBox>
              <BoxLabel>1050+</BoxLabel>
              <BoxText>Agile Enabled Employees</BoxText>
            </DetailRowBox>
          </DetailRow>
          <DetailRow>
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
        </div>
        <div style={{padding:"32px", backgroundColor: "rgb(23 , 96 , 128 )"}}>
          <ul style={{}}>
            <StyledMenuList>Careers</StyledMenuList>
            <StyledMenuList>Work@ ConsoleDot</StyledMenuList>
            <StyledMenuList>Blogs</StyledMenuList>
            <StyledMenuList>Resources</StyledMenuList>
            <StyledMenuList>Customer Reviews</StyledMenuList>
            <StyledMenuList>Contact</StyledMenuList>
          </ul>
        </div>
      </MenuPageContainer>
    </>
  );
};
