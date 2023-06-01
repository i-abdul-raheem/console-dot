import { Box, Button, Container } from "@mui/material";
import { React, Verizon } from "@/assets";

import {
  FlexBox,
  ReasonWhyWeContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";
import Image from "next/image";
import { Wrapper } from "../../utils";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";

export const ReasonWhyWeBest = () => {
  return (
    <>
      <ReasonWhyWeContainer>
        <SectionTitleDescrip>
          <SectionTitle>{`Reasons why we are the best`}</SectionTitle>
          <SectionDescrip>
            We&#39;ve helped out various clients across several industries, and
            you could be next!
          </SectionDescrip>
        </SectionTitleDescrip>
      </ReasonWhyWeContainer>
      <Container>
        <Box
          sx={{
            maxWidth: "1400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xl: "row", lg: "row", md: "column", sm: "column" },
          }}
        >
          <Box
            sx={{
              width: { xl: "40%", lg: "40%", md: "100%", sm: "100%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  display: { xl: "flex", lg: "flex", md: "none", sm: "none" },
                }}
              >
                <Image
                  src={React}
                  alt="Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <h5>{`E-commerce`}</h5>
              <h2>{`Verizon Express Store`}</h2>
              <StyledText
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  textAlign: "left",
                }}
              >
                Verizon is America&#39;s biggest wireless network operator
                company. The Express store is a commerce project where any user
                in America can purchase mobile, tablets, connected devices and
                transfer his device to Verizon.
              </StyledText>
              <div style={{ width: "100%" }}>
                <Image
                  src={Verizon}
                  alt="Image"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <Button>{`DISCOVER`}</Button>
            </div>
          </Box>
          <Box
            sx={{
              width: { xl: "60%", lg: "60%", md: "100%", sm: "100%" },
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "column-reverse",
                  sm: "column-reverse",
                },
              }}
            >
              <Box sx={{ width: { lg: "50%", md: "100%", sm: "100%" } }}>
                <Box
                  sx={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    display: { xl: "flex", lg: "flex", md: "none", sm: "none" },
                  }}
                >
                  <Image
                    src={React}
                    alt="Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <h5>{`E-commerce`}</h5>
                <h2>{`Verizon Express Store`}</h2>
                <StyledText
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    textAlign: "left",
                  }}
                >
                  Verizon is America&#39;s biggest wireless network operator
                  company. The Express store is a commerce project where any
                  user in America can purchase mobile, tablets, connected
                  devices and transfer his device to Verizon.
                </StyledText>
                <Button>{`DISCOVER`}</Button>
              </Box>
              <Box sx={{ width: { lg: "50%", md: "100%", sm: "100%" } }}>
                <Image
                  src={Verizon}
                  alt="Image"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "column-reverse",
                  sm: "column-reverse",
                },
              }}
            >
              <Box sx={{ width: { lg: "50%", md: "100%", sm: "100%" } }}>
                <Box
                  sx={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    display: { xl: "flex", lg: "flex", md: "none", sm: "none" },
                  }}
                >
                  <Image
                    src={React}
                    alt="Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <h5>{`E-commerce`}</h5>
                <h2>{`Verizon Express Store`}</h2>
                <StyledText
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    textAlign: "left",
                  }}
                >
                  Verizon is America&#39;s biggest wireless network operator
                  company. The Express store is a commerce project where any
                  user in America can purchase mobile, tablets, connected
                  devices and transfer his device to Verizon.
                </StyledText>
                <Button>{`DISCOVER`}</Button>
              </Box>
              <Box sx={{ width: { lg: "50%", md: "100%", sm: "100%" } }}>
                <Image
                  src={Verizon}
                  alt="Image"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
