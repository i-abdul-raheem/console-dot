import { getProductCaseStudy, getProducts } from "@/apis/products";
import MediaCard from "../MediaCard/MediaCard";
import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { CasestudyTop } from "../casestudy/CaseStudyTop/elements";
import { Body, ContainerPadding, H1, HeadFont, Primary } from "../utils";
import { useRouter } from "next/router";
export const AllProducts = () => {
  const router = useRouter();

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getProducts().then((res) => setData(res));
  }, []);

  const fetchData = (id: string) => {
    getProductCaseStudy(id)
      .then((result) => {
        console.log(result, "caseData");
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (id: string) => {
    console.log(id);
    router.push({
      pathname: `/products/${id}`,
    });
    fetchData(id);
  };

  return (
    <>
      <Box sx={{ backgroundColor: Body }}>
        <CasestudyTop />
        <Box>
          <Container sx={{ padding: ContainerPadding }}>
            <Box>
              <H1
                variant="h1"
                mb={2}
                sx={{ color: Primary, textAlign: "center" }}
              >
                Products From ConsoleDot
              </H1>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                marginTop: {
                  xl: "15px",
                  lg: "13px",
                  md: "11px",
                  sm: "8px",
                  xs: "6px",
                },
                paddingBottom: {
                  xl: "15px",
                  lg: "13px",
                  md: "11px",
                  sm: "8px",
                  xs: "6px",
                },
              }}
            >
              {data.map((i: any, index: any) => (
                <MediaCard
                  title={i?.title}
                  placeholder="View CaseStudy"
                  key={index}
                  image={i.hero}
                  explanation=""
                  onClick={() => handleClick(i?._id)}
                />
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};
