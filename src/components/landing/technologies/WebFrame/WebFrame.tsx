import { React } from "@/assets"
import { CardBox, CardContainer, TechHeading } from "../WebTechs/elements"
import { CardSingle } from "../WebTechs"

export const webframes=[
    {
        logo:React,
        name:'Ruby On Rails'
    },
    {
        logo:React,
        name:'React Native'
    },
    {
        logo:React,
        name:'Python'
    },
    {
        logo:React,
        name:'Golang'
    },
    {
        logo:React,
        name:'Drupal'
    },
    {
        logo:React,
        name:'Docker'
    },
    {
        logo:React,
        name:'PHP'
    },
    {
        logo:React,
        name:'CMS'
    },
    {
        logo:React,
        name:'Magento'
    },
    {
        logo:React,
        name:'Yii'
    },
    {
        logo:React,
        name:'PrestaShop'
    },{
        logo:React,
        name:'Wordpress'
    },
    {
        logo:React,
        name:'NopCommerce'
    },
    {
        logo:React,
        name:'Open Source'
    },
    {
        logo:React,
        name:'WooCommerce'
    },
    {
        logo:React,
        name:'Bubble IO'
    },
]


export const WebFrame=()=>{
    return (
        <>
        <CardContainer>
            <TechHeading>Open Source Web Framework</TechHeading>
            <CardBox>
                {webframes.map((i,index) =>(
                 <CardSingle key={index} logo={i.logo} name={i.name} />
                ))

                }
            </CardBox>
            </CardContainer>
        </>
    )
}