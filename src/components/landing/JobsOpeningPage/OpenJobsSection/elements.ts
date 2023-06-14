import { transform } from "typescript";
import { styled, Box, Button, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";
import Image from "next/image";
import { Dark, Primary } from "../../utils";

export const TopHeading = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    flexDirection: isMobileView ? "column" : "row",
  };
});

export const Singlecard = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "10px",
  transition: "transform 0.3s ease",
  boxShadow: "2px 2px 2px #aaa",
  "&:hover": {
    backgroundColor: Primary,
    boxShadow: "4px 2px 4px #aaa",
    transform: "scale(1.1)",
    color: "white",
    "&:hover > .MuiAvatar-root": {
      width: "100%",
      height: "100%",
      transition: "0.6s",
    },

    "&:hover p": {
      transition: "0.6s",
      color: "white",
    },
  },
});

export const CardSection = styled(Box)({
  marginBottom: "10px",
});

interface PropType {
  fontSize: string | null;
  center: boolean | false;
}

export const StyledText = styled(Typography)(
  ({ fontSize, center }: PropType) => {
    return {
      fontSize: fontSize ? fontSize : "20px",
      lineHeight: "30px",
      textAlign: center ? "center" : "left",
    };
  }
);
export const SectionButton = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
  columnGap: "20px",
});

export const StyledButton1 = styled(Button)({
  padding: "15px",
  border: "1px solid rgb(23 , 96 , 128 )",
  backgroundColor: "rgb(23 , 96 , 128)",
  color: "white",

  "&:hover": {
    color: "white",
    border: "1px solid white",
  },
});

export const StyledButton = styled(Button)({
  padding: "15px",
  border: "1px solid rgb(23 , 96 , 128 )",
  backgroundColor: "whitesmoke",
  color: "black",
  "&:hover": {
    backgroundColor: "rgb(23 , 96 , 128)",
    color: "white",
  },
});

export const CardBox = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "grid",
    gridTemplateColumns: isMobileView ? "1fr" : "1fr 1fr 1fr",
    gap: "20px",
    width: "100%",
  };
});

export const CardTitle = styled(Typography)({
  fontSize: "25px",
  color: Primary,
  fontWeight: "bold",
  textAlign: "center",
  transition: "transform 0.3s ease",
  "&:hover": {},
});

export const CardContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    padding: isMobileView ? 16 : 32,
  };
});

export const StyledLinkedinImg = styled(Image)({
  width: "200px",
  height: "100px",
  "@media screen and (max-width: 240px)": {
    width: "100px",
    height: "50px",
  },
});
