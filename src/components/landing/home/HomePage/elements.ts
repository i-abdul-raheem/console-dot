import { Chess } from "@/assets";
import { styled, Box, Button, Typography } from "@mui/material";

export const ContainerBox = styled(Box)({
  position: "relative",
  backgroundImage: `url(${Chess.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "100%",
    height: "100%",
    content: '""',
    zIndex: 2,
  },
});
