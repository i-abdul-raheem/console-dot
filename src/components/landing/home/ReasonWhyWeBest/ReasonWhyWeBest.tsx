import { Button } from "@mui/material";
import { React, Verizon } from "@/assets";

import {
  ReasonWhyWeContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";
import Image from "next/image";

export const ReasonWhyWeBest = () => {
  return (
    <>
      <ReasonWhyWeContainer>
        <SectionTitleDescrip>
          <SectionTitle>Reasons why we are the best</SectionTitle>
          <SectionDescrip>
            We've helped out various clients across several industries, and you
            could be next!
          </SectionDescrip>
        </SectionTitleDescrip>
      </ReasonWhyWeContainer>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", padding:'20px' }}>
          <div style={{width:'100%'}}>
            <Image src={React} alt="Image" width={150} height={50} style={{}}/>
            <h5>E-commerce</h5>
            <h2>Verizon Express Store</h2>
            <p>
              Verizon is America’s biggest wireless network operator company.
              The Express store is a commerce project where any user in America
              can purchase mobile, tablets, connected devices and transfer his
              device to Verizon.
            </p>
            <Button>DISCOVER</Button>
          </div>
          <div style={{}}>
            <Image src={Verizon} alt="Image" width={307} height={378} />
          </div>
        </div>

        <div style={{width:"75%", padding:'20px'}}>
          <div>
            <h5>FINTECH</h5>
            <h2>Bangkok Bank DCS – Digital Channel Services</h2>
            <p>
              Bangkok Bank wanted to prepare a new solution using ‘New Relic
              One’ which can replace all the modules of the DCS portal. New
              Relic One (Telemetry Platform) has been used to resolve the
              business challenges of physical and digital assets. challenges of
              physical and digital assets.
            </p>
            <Button>DISCOVER</Button>
          </div>
        </div>
      </div>
    </>
  );
};
