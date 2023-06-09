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
  Dark,
  HeadFont,
  Margin,
  Padding,
  Primary,
  Wrapper,
} from "../../utils";

export const ReasonWhyWeBest = () => {
  return (
    <>
      <ReasonWhyWeContainer>
        <SectionTitleDescrip>
          <Typography
            sx={{
              fontSize: HeadFont,
              margin: Margin,
              padding: Padding,
              color: Primary,
            }}
          >{`Reasons why we are the best`}</Typography>
          <SectionDescrip>
            We&#39;ve helped out various clients across several industries, and
            you could be next!
          </SectionDescrip>
        </SectionTitleDescrip>
      </ReasonWhyWeContainer>
      <Container>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xl: "4rem", lg: "3rem", md: "2rem", sm: "1rem" },
            paddingBottom: { xl: "5rem", lg: "4rem", md: "4rem", sm: "2rem" },
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
              width: {
                xl: "40%",
                lg: "40%",
                md: "40%",
                sm: "100%",
                xs: "100%",
              },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "100%", background: Body }}>
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
                  <h5 style={{ paddingLeft: "10px" }}>{`E-Studies`}</h5>
                  <h2 style={{ paddingLeft: "10px" }}>{`LEFT SIDE`}</h2>
                  <Typography sx={{ paddingLeft: "10px" }}>
                    Verizon is America&#39;s biggest wireless network operator
                    company. The Express store is a commerce project where any
                    user in America can purchase mobile, tablets, connected
                    devices and transfer his device to Verizon.
                  </Typography>
                  .
                </Box>
                <div>
                  <Button
                    variant="contained"
                    sx={{ margin: Margin, backgroundColor: Dark }}
                  >{`DISCOVER`}</Button>
                </div>
              </Box>

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
            </div>
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
                <h5 style={{ paddingLeft: "10px" }}>{`E-Studies`}</h5>
                <h2
                  style={{ paddingLeft: "10px" }}
                >{`Verizon Express Store`}</h2>
                <Typography sx={{ paddingLeft: "10px" }}>
                  Verizon is America&#39;s biggest wireless network operator
                  company. The Express store is a commerce project where any
                  user in America can purchase mobile, tablets, connected
                  devices and transfer his device to Verizon.
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    sx={{ margin: Margin, backgroundColor: Dark }}
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
                <h5 style={{ paddingLeft: "10px" }}>{`E-Commerce`}</h5>
                <h2
                  style={{ paddingLeft: "10px" }}
                >{`Verizon Express Store`}</h2>
                <Typography sx={{ paddingLeft: "10px" }}>
                  Verizon is America&#39;s biggest wireless network operator
                  company. The Express store is a commerce project where any
                  user in America can purchase mobile, tablets, connected
                  devices and transfer his device to Verizon.
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    sx={{ margin: Margin, backgroundColor: Dark }}
                  >{`DISCOVER`}</Button>
                </div>
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
