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
            <div style={{ width: "100%" }}>
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
                  <h5>{`E-Studies`}</h5>
                  <h2>{`Verizon Express Store`}</h2>
                  Verizon is America&#39;s biggest wireless network operator
                  company. The Express store is a commerce project where any
                  user in America can purchase mobile, tablets, connected
                  devices and transfer his device to Verizon.
                </Box>
                <Button variant="contained">{`DISCOVER`}</Button>
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
                <h5>{`E-Studies`}</h5>
                <h2>{`Verizon Express Store`}</h2>
                Verizon is America&#39;s biggest wireless network operator
                company. The Express store is a commerce project where any user
                in America can purchase mobile, tablets, connected devices and
                transfer his device to Verizon.
                <div>
                  <Button variant="contained">{`DISCOVER`}</Button>
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
                <h5>{`E-Commerce`}</h5>
                <h2>{`Verizon Express Store`}</h2>
                Verizon is America&#39;s biggest wireless network operator
                company. The Express store is a commerce project where any user
                in America can purchase mobile, tablets, connected devices and
                transfer his device to Verizon.
                <div>
                  <Button variant="contained">{`DISCOVER`}</Button>
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
