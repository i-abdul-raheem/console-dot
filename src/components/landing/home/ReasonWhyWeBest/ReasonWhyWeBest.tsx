import { Button } from "@mui/material";
import { React, Verizon } from "@/assets";

import {
  FlexBox,
  ReasonWhyWeContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";
import Image from "next/image";
import { Wrapper } from "../../utils";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";

export const ReasonWhyWeBest = () => {
  return (
    <>
      <ReasonWhyWeContainer>
        <SectionTitleDescrip>
          <SectionTitle>{`Reasons why we are the best`}</SectionTitle>
          <SectionDescrip>
            We&#39;ve helped out various clients across several industries, and
            you could be next!
          </SectionDescrip>
        </SectionTitleDescrip>
      </ReasonWhyWeContainer>

      <FlexBox>
        <div style={{ width: "100%" }}>
          <Image src={React} alt="Image" width={150} height={50} style={{}} />
          <h5>{`E-commerce`}</h5>
          <h2>{`Verizon Express Store`}</h2>
          <StyledText
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Verizon is America&#39;s biggest wireless network operator company.
            The Express store is a commerce project where any user in America
            can purchase mobile, tablets, connected devices and transfer his
            device to Verizon.
          </StyledText>
          <Button>{`DISCOVER`}</Button>
        </div>
        <div style={{}}>
          <Image src={Verizon} alt="Image"  />
        </div>

        <div style={{ width: "75%", padding: "20px" }}>
          <h5>{`FINTECH`}</h5>
          <h2>Bangkok Bank DCS &ndash; Digital Channel Services</h2>
          <StyledText
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Bangkok Bank wanted to prepare a new solution using &lsquo;New Relic
            One&rsquo; which can replace all the modules of the DCS portal. New
            Relic One (Telemetry Platform) has been used to resolve the business
            challenges of physical and digital assets. challenges of physical
            and digital assets.
          </StyledText>
          <Button>{`DISCOVER`}</Button>
        </div>
      </FlexBox>
    </>
  );
};
