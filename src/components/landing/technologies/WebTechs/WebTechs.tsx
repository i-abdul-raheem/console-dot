import { React, TopTech } from "@/assets";
import { Box, colors } from "@mui/material";
import Image from "next/image";
import {
  CardBox,
  CardContainer,
  SingleCard,
  TechHeading,
} from "./elements";

interface props {
  logo: any;
  name: string;
}

export const CardSingle = ({ logo, name }: props) => {
  return (
    <SingleCard>
      <Image src={logo} alt="logo" style={{width:"70px" , height:"auto"}}/>
      <label>{name}</label>
    </SingleCard>
  );
};

export const tech = [
  {
    logo: React,
    name: "ReactJS",
  },
  {
    logo: React,
    name: "Node JS",
  },
  {
    logo: React,
    name: "Vue",
  },
  {
    logo: React,
    name: "Angular JS",
  },
  {
    logo: React,
    name: "Ember JS",
  },
  {
    logo: React,
    name: "Bootstrap",
  },
  {
    logo: React,
    name: "Polymer JS",
  },
  {
    logo: React,
    name: "Front End",
  },
  {
    logo: React,
    name: "Mern Stack",
  },
  {
    logo: React,
    name: "Mean Stack",
  },
  {
    logo: React,
    name: "Backbone JS",
  },
  {
    logo: React,
    name: "Quasar",
  },
  {
    logo: React,
    name: "JavaScript",
  },
  {
    logo: React,
    name: "TypeScript",
  },
  {
    logo: React,
    name: "Next JS",
  },
];

export const WebTechs = () => {
  return (
    <>
      <CardContainer>
        
          <TechHeading style={{}}>Web Development</TechHeading>
        
        <CardBox>
          {tech.map((i, index) => (
            <CardSingle key={index} logo={i.logo} name={i.name} />
          ))}
        </CardBox>
        </CardContainer>
      
    </>
  );
};
