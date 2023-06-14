import { Box, Button, Container, Typography } from "@mui/material";
import { React, Verizon } from "@/assets";

import {
  FlexBox,
  ReasonWhyWeContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";
import Image from "next/image";
import {
  Body,
  ButtonPadding,
  ContainerPadding,
  Dark,
  H1,
  H2,
  H3,
  HeadFont,
  Margin,
  Padding,
  Para,
  Primary,
  SubFont,
  Wrapper,
} from "../../utils";

export const ReasonWhyWeBest = () => {
  return (
    <>
      <ReasonWhyWeContainer>
        <SectionTitleDescrip>
          <H1
            variant="h1"
            sx={{
              color: Primary,
            }}
            mb={2}
          >{`Reasons why we are the best`}</H1>
          <H2 variant="h2" sx={{ color: "#696969" }}>
            We&#39;ve helped out various clients across several industries, and
            you could be next!
          </H2>
        </SectionTitleDescrip>
      </ReasonWhyWeContainer>
      <Container sx={{ padding: ContainerPadding }}>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: { xl: "4rem", lg: "3rem", md: "2rem", sm: "1rem" },

            rowGap: 4,
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xl: "40%",
                lg: "40%",
                md: "40%",
                sm: "100%",
                xs: "100%",
              },
              display: "flex",
              flexDirection: {
                xl: "column",
                lg: "column",
                md: "column",
                sm: "column-reverse",
                xs: "column-reverse",
              },
            }}
          >
            <div style={{ width: "100%", background: Body, height: "auto" }}>
              <Box>
                <Box
                  sx={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    display: {
                      xl: "flex",
                      lg: "flex",
                      md: "flex",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Image
                    src={React}
                    alt="Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>

                <Box
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    textAlign: "left",
                  }}
                >
                  <H2
                    variant="h2"
                    sx={{ margin: Margin, color: Primary }}
                  >{`leFT sIDE`}</H2>
                  <H1 variant="h1" sx={{ margin: Margin }}>{`CONSOLEDOT`}</H1>
                  <H3 variant="h3" sx={{ margin: Margin }}>
                    Verizon is America&#39;s biggest wireless network operator
                    company. The Express store is a commerce project where any
                    user in America can purchase mobile, tablets, connected
                    devices and transfer his device to Verizon.
                  </H3>
                </Box>
                <div>
                  <Button
                    variant="contained"
                    sx={{
                      margin: Margin,
                      backgroundColor: Dark,
                      padding: ButtonPadding,
                    }}
                  >{`DISCOVER`}</Button>
                </div>
              </Box>
            </div>
            <Box
              sx={{
                width: "100%",
                minHeight: "200px",
              }}
            >
              <Image
                src={Verizon}
                alt="Image"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xl: "60%",
                lg: "70%",
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
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
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
              }}
            >
              <Box
                sx={{
                  background: Body,

                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  textAlign: "left",
                  width: {
                    xl: "50%",
                    lg: "50%",
                    md: "50%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                {/* spec logos */}
                <Box
                  sx={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    display: {
                      xl: "flex",
                      lg: "flex",
                      md: "flex",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Image
                    src={React}
                    alt="Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <H2
                  variant="h2"
                  sx={{ margin: Margin, color: Primary }}
                >{`leFT sIDE`}</H2>
                <H1 variant="h1" sx={{ margin: Margin }}>{`CONSOLEDOT`}</H1>
                <H3 variant="h3" sx={{ margin: Margin }}>
                  Verizon is America&#39;s biggest wireless network operator
                  company. The Express store is a commerce project where any
                  user in America can purchase mobile, tablets, connected
                  devices and transfer his device to Verizon.
                </H3>
                <div>
                  <Button
                    variant="contained"
                    sx={{
                      margin: Margin,
                      backgroundColor: Dark,
                      padding: ButtonPadding,
                    }}
                  >{`DISCOVER`}</Button>
                </div>
              </Box>
              <Box
                sx={{
                  background: Body,
                  width: {
                    xl: "50%",
                    lg: "50%",
                    md: "50%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%" },
                    minHeight: "300px",
                  }}
                >
                  <Image
                    src={Verizon}
                    alt="Image"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },

                background: Body,
              }}
            >
              <Box
                sx={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  textAlign: "left",
                  width: {
                    xl: "50%",
                    lg: "50%",
                    md: "50%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                {/* spec logos */}
                <Box
                  sx={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    display: {
                      xl: "flex",
                      lg: "flex",
                      md: "flex",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Image
                    src={React}
                    alt="Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: Padding,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    rowGap: "10px",
                    flexDirection: "column",
                  }}
                >
                  <H2
                    variant="h2"
                    sx={{ color: Primary }}
                    mb={2}
                  >{`E-Studies`}</H2>
                  <H1 variant="h1" mb={2}>{`E-Studies`}</H1>
                  <H3 variant="h3" mb={2}>
                    Verizon is America&#39;s biggest wireless network operator
                    company. The Express store is a commerce project where any
                    user in America can purchase mobile, tablets, connected
                    devices and transfer his device to Verizon.
                  </H3>
                  <div>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: Dark, padding: ButtonPadding }}
                    >{`DISCOVER`}</Button>
                  </div>
                </Box>
              </Box>
              <Box
                sx={{
                  width: {
                    xl: "50%",
                    lg: "50%",
                    md: "50%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%" },
                    minHeight: "300px",
                  }}
                >
                  <Image
                    src={Verizon}
                    alt="Image"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
