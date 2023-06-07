import { MainLogo } from "@/assets";
import Image from "next/image";
import {
  GoBackBtn,
  HeaderText,
  HireHeader,
  LogoImage,
  NameHeading,
} from "./elements";
import { StyledButton } from "../../careers/CareersTopPage/elements";
import { HiringForm } from "../HiringForm";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";

export const HirePageHeader = () => {

  const router = useRouter();
  return (
    <Container>
      <HireHeader>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LogoImage src={MainLogo} alt="Main Logo" />
          <HeaderText>
            Console<span style={{ color: "rgb(23 , 96 , 128 )" }}>Dot</span>
          </HeaderText>
        </div>

        <GoBackBtn onClick={() => router.push("./")}>Go Back</GoBackBtn>
      </HireHeader>
    </Container>
  );
};
