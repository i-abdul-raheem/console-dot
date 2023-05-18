import { styled, Box } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const ScrollBarContainer = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  backgroundColor: "whitesmoke",
  height: 630,
  overflow: "hidden",
  overflowY: "scroll",
  display:isMobileView? 'none':"flex"
  }
});

export const ListItem = styled(Box)({
  fontSize: "20px",
  padding: "10px 5px",
  borderBottom: "1px solid #ddd",

  "&:hover": {
    backgroundColor: "#fff",
    color: "rgb(23 , 96 , 128 )",
  },
});

export const List = styled(Box)({
  backgroundColor: "whitesmoke",
});
