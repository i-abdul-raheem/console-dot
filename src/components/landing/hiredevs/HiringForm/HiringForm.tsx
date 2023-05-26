import { useEffect } from "react";
import { InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import { StyledForm, StyledTextInputs } from "./elements";
import { StyledButton } from "../../home/InquireSection/elements";

export const HiringForm = () => {
  return (
    <div style={{ padding: "32px" }}>
      <StyledForm>
        <StyledTextInputs
          style={{}}
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
        <StyledTextInputs
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
        <StyledTextInputs
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
        <StyledTextInputs style={{paddingBottom:"40px"}}
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

        <StyledButton> Inquire Now </StyledButton>
        <span style={{fontSize:"15px", textAlign:"center", padding:"20px 0"}}>
          We guarantee 100% security of your information. We will not share the
          details you provide above with anyone. Your email won’t be used for
          spamming.
        </span>
      </StyledForm>
    </div>
  );
};
