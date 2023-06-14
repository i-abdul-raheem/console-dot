import {
  ContainerPadding,
  H1,
  HeadFont,
  Margin,
  Padding,
  Primary,
  Services,
  SubFont,
} from "@/components";
import { ServiceCard } from "@/components/landing/Services/elements";
import { Box, Container, Typography } from "@mui/material";
import { Black } from "@/assets";
import { Layout } from "@/components/landing/Layout/Layout";
interface props {
  heading: string;
  details: string;
}

export const tech = [
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios. JS",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.S",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ap",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios. JS",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.nd",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ack",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ack",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.e JS",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ipt",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ipt",
  },
  {
    image: Black,
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
];
const Index = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: "white" }}>
        <Container sx={{ padding: ContainerPadding }}>
          <Box>
            <H1
              variant="h1"
              sx={{
                color: Primary,
                textAlign: "center",
              }}
              mb={5}
            >
              Services We Provide
            </H1>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },

                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {tech.map((item, index) => {
                return (
                  <Services
                    key={index}
                    heading={item?.heading}
                    details={item?.details}
                    image={item?.image?.src}
                  />
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
export default Index;
