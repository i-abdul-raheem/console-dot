import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  CardContent,
  CardHeading,
  CardText,
  ClientCard,
  ClientCardHeading,
  ClientCardsSection,
  FortuneClientsContainer,
} from "./elements";
import { Box, Container, Typography } from "@mui/material";
import { Image0 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { HeadFont, Margin, Padding, Primary } from "../utils";
interface props {
  heading: string;
  description: string;
  image: any;
}
const ClientSingleCard = ({ heading, description, image }: props) => {
  return (
    <ClientCard>
      <div style={{ position: "relative" }}>
        <Image
          src={image}
          alt="Image"
          style={{ height: "500px", width: "100%" }}
        />

        <CardContent>
          <CardText style={{ fontSize: "30px" }}>{heading}</CardText>
          <CardText>{description}</CardText>
        </CardContent>
      </div>
    </ClientCard>
  );
};
const data = [
  {
    heading: "Cetera Advice Works",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam aliquam ",
    image: Image0,
  },
  {
    heading: "The Childrens Place",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam aliquam ",
    image: Image0,
  },
  {
    heading: "Swiggy Crm",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam aliquam ",
    image: Image0,
  },
];
export const ExploreCaseStudies = () => {
  return (
    <Box>
      <Container>
        <FortuneClientsContainer>
          <ClientCardHeading>
            <Typography
              sx={{
                fontSize: HeadFont,
                padding: Padding,
                color: Primary,
                margin: Margin,
              }}
            >
              Case Study - Fortune Clients
            </Typography>
            <ArrowForwardIcon />
          </ClientCardHeading>

          <ClientCardsSection>
            {data.map((i, index) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
                href={`/exploreCaseStudies/${i.heading}`}
                passHref
              >
                <ClientSingleCard
                  key={index}
                  heading={i.heading}
                  description={i.description}
                  image={i.image}
                />
              </Link>
            ))}
          </ClientCardsSection>
        </FortuneClientsContainer>
      </Container>
    </Box>
  );
};
