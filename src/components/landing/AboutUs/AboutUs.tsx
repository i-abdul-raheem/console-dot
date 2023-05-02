import Image from "next/image";
import {
  AboutUsContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";
import { Pic1 } from "@/assets";

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <SectionTitleDescrip>
        <SectionTitle>ABOUT US</SectionTitle>
        <SectionDescrip>
          A global leader in next-generation digital services and consulting
        </SectionDescrip>
      </SectionTitleDescrip>
      <div
        style={{ display: "flex", justifyContent: "center", columnGap: "30px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label>12+</label>
          <span style={{ fontSize: "15px" }}>
            Countries Where We Have Happy Customers
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label>1050+</label>
          <span style={{ fontSize: "15px" }}>Agile Enabled Employees</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label>06</label>
          <span style={{ fontSize: "15px" }}>Worldwide Office</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label>05</label>
          <span style={{ fontSize: "15px" }}>Agile Coaches</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label>14</label>
          <span style={{ fontSize: "15px" }}>Certified Scrum Masters</span>
        </div>
      </div>

      <div style={{display:'flex',columnGap:'10px' ,marginTop:"50px"}}>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',width:'100%'}}>
          
          <Image src={Pic1} alt="Image" width={560} height={560}/>

        </div>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',width:'100%'}}>
          <h2>Agile, A Process Delivering Values & Successful Products</h2>
          <h4>Knowledge @Insights Success Magazine</h4>
          <p>
            Bacancy represents the connected world, offering innovative and
            customer-centric information technology experiences, enabling
            Enterprises, Associates and the Society to Rise™.
          </p>
        </div>
      </div>
    </AboutUsContainer>
  );
};
