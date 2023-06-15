import { styled, Box } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";
import { transform } from "typescript";
import { Dark, Primary } from "../../utils";

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
  padding: "10px 15px",
  borderBottom: "1px solid #ddd",
  backgroundColor: Primary,
  scale: ".8",
  transition: "transform 0.3s ease-in-out",
  cursor:'pointer',

  "&:hover": {
    backgroundColor: Dark,
    transition: "2s all ease in out",
    transform: "scale(1.2)",
    // transform: "translateX(-20px)",
  },
});


