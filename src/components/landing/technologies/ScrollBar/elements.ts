import { styled, Box } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";
import { transform } from "typescript";

export const ScrollBarContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    color: "#fff",
    height: "100%",
    overflow: "hidden",
    overflowY: "scroll",
  };
});

export const ListItem = styled(Box)({
  fontSize: "20px",
  padding: "10px 5px",
  borderBottom: "1px solid #ddd",
  backgroundColor: "#226597",
  scale: ".8",
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    backgroundColor: "#87c0cd",
    transition: "2s all ease in out",
    transform: "scale(1.2)",
    // transform: "translateX(-20px)",
  },
});

export const List = styled(Box)({
  backgroundColor: "#f3f9fb",
});
