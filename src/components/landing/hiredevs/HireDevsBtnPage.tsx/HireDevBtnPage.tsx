import { MainLogo } from "@/assets";
import Image from "next/image";
import { HireHeader, NameHeading } from "./elements";
import { StyledButton } from "../../careers/CareersTopPage/elements";
import { useEffect } from "react";
import { InputAdornment, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";

export const HireDevBtnPage = () => {
  // useEffect(() => {
  //     document.getElementById("__next").style.width = "100%";
  // }, [])
  return (
    <>
      <HireHeader>
        <div style={{ display: "flex" }}>
          <Image src={MainLogo} alt="Main Logo" width={50} height={50} />
          <NameHeading>
            Console<span style={{ color: "rgb(23 , 96 , 128 )" }}>Dot</span>
          </NameHeading>
        </div>

        <StyledButton>Go Back</StyledButton>
        </HireHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Your Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          placeholder="Email Address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          placeholder="Phone Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          placeholder="Your Message"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MessageIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};
