import { Chess, Chess2 } from "@/assets";
import { Box, styled } from "@mui/material";
import { Black, Tech } from "@/assets";
import { Primary } from "../../utils";

export const CasestudyTop = styled(Box)({
  width: "100%",
  height: "900px",
  objectFit: "cover",
  backgroundSize: "cover",
  backgroundImage: `url('${Black.src}')`,
  position: "relative",
});
export const TopInnerBox = styled(Box)({
  position: "absolute",
  display: "flex",
  top: "80%",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor:Primary,
  color: "white",
  height: "500px",
  width: "80%",
  left: "30%",
  backgroundSize: "cover",
  backgroundImage: `url('${Tech.src}')`,
});

export const ChallangesSolutions = styled(Box)({
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  flexDirection: "column",
  maxWidth: "500px",
  padding: "25px 15px",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
  "&:last-child": "0",
  "&:hover": {
    boxShadow: "0px 0px 20px 2px rgba(0, 0, 0, 0.2)",
  },
});