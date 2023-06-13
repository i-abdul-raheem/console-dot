import { Chess2 } from "@/assets";
import { Box, Typography, styled } from "@mui/material";

export const FortuneClientsContainer = styled(Box)({ paddingBottom: "62px" });

export const ClientCardHeading = styled(Box)({
  display: "flex",
  alignItems: "center",
  paddingBottom: "32px",
  justifyContent: "center",
});

export const CardHeading = styled(Typography)({
  fontSize: "48px",
  fontWeight: "bold",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const ClientCardsSection = styled(Box)(() => {
  return {
    display: "flex",

    columnGap: "20px",
    rowGap: "20px",
  };
});

export const ClientCard = styled(Box)({
  backgroundSize: "cover",
  height: "200px",
  width: "200px",
  position: "relative",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    content: '""',
  },
});
export const CardContent = styled(Box)({
  position: "absolute",
  display: "flex",
  bottom: 0,
  flexDirection: "column",
  textAlign: "center",
  background: "rgba(0,0,0,0.5)",
  justifyContent: "center",

});
export const CardText = styled(Typography)({
  color: "white",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  textAlign: "center",
  fontSize: "20px",
});
