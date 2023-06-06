import { HeadFont, Services, SubFont } from "@/components";
import { ServiceCard } from "@/components/landing/Services/elements";
import { Box, Container, Typography } from "@mui/material";

interface props {
  heading: string;
  details: string;
}

export const tech = [
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios. JS",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.S",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ap",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios. JS",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.nd",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ack",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ack",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.e JS",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ipt",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.ipt",
  },
  {
    heading: "ReactJS Plugin Development",
    details:
      "Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios.",
  },
];
const Index = () => {
  return (
    <Box sx={{ backgroundColor: "#e2f1ff" }}>
      <Container>
        <Box>
          <Box>
            {tech.map((item, index) => (
              <Services
                key={index}
                heading={item.heading}
                details={item.details}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Index;
