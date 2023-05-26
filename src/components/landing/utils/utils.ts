import { Box, styled, useMediaQuery } from "@mui/material";

export const useIsMobileView = () => !useMediaQuery(`(min-width: 1100px)`);


export const MobResWrap=styled(Box)({
    "@media screen and (max-width: 320px)": {
        width:'100vw'
      }
})