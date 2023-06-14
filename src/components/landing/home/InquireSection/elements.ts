import { styled, Button, Box, TextareaAutosize } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";
import { Primary } from "../../utils";

export const StyledButton = styled(Button)({
  color: "#113f67",
  border: "1px solid #113f67",
  "&:hover": {
    backgroundColor: Primary,
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


export const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 50;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 5px 5px 0 5px;
  color: ${'white'};
  background: ${"#226597"};
  border: 1px solid ${'white'};

  &:hover {
    border-color: ${"white"};
  }

  &:focus {
    border: 1px solid ${'white'};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
  
`
);
