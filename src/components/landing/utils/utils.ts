import { useMediaQuery } from "@mui/material";

export const useIsMobileView = () => !useMediaQuery(`(min-width: 1100px)`);
