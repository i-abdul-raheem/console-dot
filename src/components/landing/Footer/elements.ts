import { styled, Box, Typography } from "@mui/material";
import { BackImage } from "@/assets";

export const FooterSection = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: "#226597",
  color: "white",
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url('${BackImage.src}')`,
  "&:before": {
    position: "absolute",
    content: '""',
    backgroundColor: "rgba(17,63,103,0.6)",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
});

export const ReviewSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom: "20px",
  zIndex: "1",
});

export const NavSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom: "20px",
  zIndex: "1",
  flexWrap: "wrap",
});

export const ContactSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  flexWrap: "wrap",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom: "20px",
  zIndex: "1",
});

export const FooterHeading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "5px",
});
export const NavItemList = styled(Box)({});

export const NavItem = styled(Box)({
  padding: "0 10px",
});

export const ContactInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const AddressInfo = styled(Box)({
  marginBottom: "10px",
});

export const WhatsAppInfo = styled(Box)({
  marginBottom: "10px",
});

export const EmailInfo = styled(Box)({});

export const FooterBottom = styled(Box)(({ theme }) => ({
  height: 66,
  // backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  width: "100%",
  flexWrap: "wrap",
}));

export const SocialMediaIconsList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "30px",
});

export const FooterBottomCopyRight = styled(Typography)({
  marginLeft: "",
  fontFamily: "sans-serif",
});
