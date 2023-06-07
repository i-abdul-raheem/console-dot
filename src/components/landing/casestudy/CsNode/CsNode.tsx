import Image from "next/image";
import {
  CardContent,
  CardHeading,
  CardText,
  ClientCard,
  ClientCardHeading,
  ClientCardsSection,
} from "../FortuneClients/elements";
import { Chess2 } from "@/assets";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CsNodeContainer } from "./elements";

interface props {
  heading: string;
  description: string;
  image: any;
}

const data = [
  {
    heading: "Cetera Advice Works",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam aliquam ",
    image: Chess2,
  },
  {
    heading: "The Childrens Place",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam aliquam ",
    image: Chess2,
  },
  {
    heading: "Swiggy Crm",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam aliquam ",
    image: Chess2,
  },
];
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
export const CsNode = () => {
  return (
    <>
      <CsNodeContainer>
        <ClientCardHeading>
          <CardHeading>Case Study - Node.js</CardHeading>
          {/* <ArrowForwardIcon style={{ color: "rgb(23 , 96 , 128 )" }} /> */}
        </ClientCardHeading>
        <ClientCardsSection>
          {data.map((i, index) => (
            <ClientSingleCard
              key={index}
              heading={i.heading}
              description={i.description}
              image={i.image}
            />
          ))}
        </ClientCardsSection>
      </CsNodeContainer>
    </>
  );
};
