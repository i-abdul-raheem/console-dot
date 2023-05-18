import { React } from "@/assets"
import { CardBox, SingleCard } from "./elements";
import Image from "next/image";
import { Card } from "../WebTechs";
import { CardContainer, TechHeading } from "../WebTechs/elements";
 
interface props{
    logo:any;
    name:string
}



export const mobiletechs=[
    {
        logo:React,
        name:'Mobile App'
    },
    {
        logo:React,
        name:'React Native'
    },
    {
        logo:React,
        name:'Ionic'
    },
    {
        logo:React,
        name:'Flutter'
    },
    {
        logo:React,
        name:'Android'
    },
    {
        logo:React,
        name:'iPhone'
    },
    {
        logo:React,
        name:'Kotlin'
    },
    {
        logo:React,
        name:'iPad'
    },
]

export const Mobile=()=>{
    return(
        <>
        <CardContainer>
            
                <TechHeading>Mobile</TechHeading>
            
            <CardBox>
          {mobiletechs.map((i, index) => (
            <Card key={index} logo={i.logo} name={i.name} />
          ))}
        </CardBox>
        </CardContainer>
        </>
    )
}