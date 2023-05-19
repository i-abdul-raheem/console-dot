import { Box, styled } from "@mui/material";

export const ScrollingControl = styled(Box)({
  overflow: "hidden",
  overflowY:'scroll',
  height: 630,
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    width: "0",
    backgroundColor: "transparent",
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
