import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { TransformImage } from "@/assets";
import { Background, SingleBox } from "./elements";
import { HeadFont } from "../../utils";
export const DigitalTransformation = () => {
  return (
    <>
      <Background sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            // gridTemplateColumns: "1fr 1fr 1fr 1fr",
            boxSizing: "border-box",
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden"
          }}
        >
          <SingleBox>
            <Typography
              sx={{ fontSize: HeadFont, color: "white", zIndex: 999 }}
            >
              Digital Transformation & Product Development
            </Typography>
            <Button sx={{ color: "white", zIndex: 999 }}>
              Discover <ArrowRightAltIcon />
            </Button>
          </SingleBox>
          <SingleBox>
            <Typography
              sx={{ fontSize: HeadFont, color: "white", zIndex: 999 }}
            >
              Enterprise Application Management
            </Typography>
            <Button sx={{ color: "white", zIndex: 999 }}>
              Discover <ArrowRightAltIcon />
            </Button>
          </SingleBox>
          <SingleBox>
            <Typography
              sx={{ fontSize: HeadFont, color: "white", zIndex: 999 }}
            >
              Agile QA, Automation and DevOPs
            </Typography>
            <Button sx={{ color: "white", zIndex: 999 }}>
              Discover <ArrowRightAltIcon />
            </Button>
          </SingleBox>
          <SingleBox>
            <Typography
              sx={{ fontSize: HeadFont, color: "white", zIndex: 999 }}
            >
              Emedded & Hardware
            </Typography>
            <Button sx={{ color: "white", zIndex: 999 }}>
              Discover <ArrowRightAltIcon />
            </Button>
          </SingleBox>
        </Box>
      </Background>
    </>
  );
};
