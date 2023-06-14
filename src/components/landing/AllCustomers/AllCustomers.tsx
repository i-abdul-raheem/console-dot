import {
  CardContent,
  CardText,
  ClientCard,
  ClientCardsSection,
  FortuneClientsContainer,
} from "./elements";
import { Box, Container, Typography } from "@mui/material";

import { useRouter } from "next/router";
import Link from "next/link";
// import { HeadFont, Margin, Padding, Primary } from "../utils";
import { useState, useEffect } from "react";
import { getAllCustomers } from "@/apis/customers";
import {
  Body,
  ContainerPadding,
  H1,
  HeadFont,
  Padding,
  Primary,
} from "../utils";
import { CasestudyTop } from "../casestudy/CaseStudyTop/elements";
import MediaCard from "../MediaCard/MediaCard";
import Image from "next/image";
import { FrequentQuestions } from "../FrequentQuestions";

interface props {
  heading: string; //title
  description: string;
  image: any; //hero
  onClick: any;
}
const ClientSingleCard = ({ heading, description, image, onClick }: props) => {
  return (
    <ClientCard>
      <div style={{ position: "relative" }} onClick={onClick}>
        <Image
          src={`https://api.consoledot.com/file/${image}`}
          alt="Image"
          style={{ height: "200px", width: "200px" }}
        />
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <Typography>{heading}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </div>
    </ClientCard>
  );
};

export const AllCustomers = () => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  let params;

  const handleClick = (customer: any) => {
    router.push({
      pathname: `/customersDetail`,
      query: customer,
    });
  };

  useEffect(() => {
    getAllCustomers().then((res) => setData([...res]));
  }, []);

  return (
    <Box sx={{ backgroundColor: Body }}>
      <CasestudyTop />
      <Box>
        <Container sx={{ padding: ContainerPadding }}>
          <Box>
            <H1 sx={{ color: Primary, textAlign: "center" }} mb={2} variant="h1">
              Products From ConsoleDot
            </H1>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1rem",
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
            {data &&
              data.map((i: any, index: any) => (
                <Link
                  href={`/customersDetail`}
                  passHref
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <MediaCard
                    onClick={() => handleClick(i)}
                    key={index}
                    title={i?.name}
                    placeholder="View CaseStudy"
                    image={i?.logo}
                    explanation=""
                  />
                </Link>
              ))}
          </Box>
        </Container>
        <Box sx={{ bgcolor: "white" }}>
          <Container>
            <FrequentQuestions />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
