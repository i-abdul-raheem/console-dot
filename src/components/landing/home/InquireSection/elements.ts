import { styled, Button, Box } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const StyledButton = styled(Button)({
  color: "orange",
  border: "1px solid orange",
  "&:hover": {
    backgroundColor: "orange",
    color: "white",
  },
});

export const SectionContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection: isMobileView ? "column" : "row",
    backgroundColor: "transparent",
    columnGap: "20px",
    rowGap: "20px",
    width: "100%",
  };
});

export const SectionTitle = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

export const FormSection = styled(Box)({
  paddingTop: "32px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  justifyContent: "center",
});

export const InputsFirstRow = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection: isMobileView ? "column" : "row",
    rowGap: "20px",
    columnGap: "30px",
  };
});

export const InputsSecondRow = styled(Box)({
  marginBottom: "20px",
});

export const ButtonSection = styled(Box)({
  marginBottom: "20px",
});
