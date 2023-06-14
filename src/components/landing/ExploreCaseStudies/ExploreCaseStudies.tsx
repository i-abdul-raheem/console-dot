import {
  CardContent,
  CardText,
  ClientCard,
  ClientCardsSection,
  FortuneClientsContainer,
} from "./elements";
import { Box, Container } from "@mui/material";
import Link from "next/link";

import { useState, useEffect } from "react";

import { getCaseStudy } from "@/apis/caseStudy";
import Image from "next/image";
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
        width={500}
        height={500}
          src={`https://api.consoledot.com/file/${image}`}
          alt="Image"
          style={{ height: "500px", width: "100%" }}
        />

        <CardContent>
          <CardText style={{ fontSize: "30px" }}>{image}</CardText>
          <CardText>{description}</CardText>
        </CardContent>
      </div>
    </ClientCard>
  );
};

// {
//   "_id": "63fc75df9f66b36fe2afc366",
//   "name": "Syed Brothers",
//   "address": "DHA Phase 5",
//   "logo": "63fc75de9f66b36fe2afc364",
//   "contact_info": "03004871213",
//   "__v": 0
// },
export const ExploreCaseStudies = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getCustomers().then((res) => setData([...res]));
  // }, []);

  return (
    <Box>
      <Container>
        <FortuneClientsContainer>
          <ClientCardsSection
            sx={{
              flexDirection: {
                xl: "column",
                lg: "column",
                md: "column",
                sm: "row",
                xs: "row",
              },
            }}
          >
            {data &&
              data.map((i: any, index: any) => (
                <Link
                key={index}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  href={`/exploreCaseStudies/${i?._id}`}
                  passHref
                  onClick={getCaseStudy}
                >
                  <ClientSingleCard
                    key={index}
                    heading={i?.name}
                    description={i?.address}
                    image={i?.logo}
                  />
                </Link>
              ))}
          </ClientCardsSection>
        </FortuneClientsContainer>
      </Container>
    </Box>
  );
};
