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
        <img
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

// {
//   "_id": "63fc75df9f66b36fe2afc366",
//   "name": "Syed Brothers",
//   "address": "DHA Phase 5",
//   "logo": "63fc75de9f66b36fe2afc364",
//   "contact_info": "03004871213",
//   "__v": 0
// },
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

  // useEffect(() => {
  //   if (window) {
  //     params = new URL(document.location).searchParams;
  //   }
  // });

  useEffect(() => {
    getAllCustomers().then((res) => setData([...res]));
  }, []);

  return (
    <Box>
      <h1>All Customers</h1>
      <Container>
        <FortuneClientsContainer>
       
          <ClientCardsSection
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            {data &&
              data.map((i: any, index: any) => (
                <Link href={`/customersDetail`} passHref>
                  <ClientSingleCard
                    onClick={() => handleClick(i)}
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
