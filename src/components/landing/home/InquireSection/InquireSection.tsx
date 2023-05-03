import { TextField, Button ,TextareaAutosize} from "@mui/material";
import { FormSection, InputsFirstRow, InputsSecondRow, SectionContainer, SectionTitle, StyledButton } from "./elements";

export const InquireSection = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>
          <h1>How Can We Help You? </h1>
        </SectionTitle>
        <FormSection>
          <InputsFirstRow>
            <div className="name" style={{ width: "100%" }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Your Name"
                variant="outlined"
              />
            </div>
            <div className="email" style={{ width: "100%" }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Email Address"
                variant="outlined"
              />
            </div>
            <div className="phone_num" style={{ width: "100%" }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Phone Number"
                variant="outlined"
              />
            </div>
            </InputsFirstRow>

          <InputsSecondRow>
            <TextareaAutosize
              id="outlined-basic"
              placeholder="Your Message"
              minRows={7} 
              
              style={{width:'100%',fontSize:'20px'}}
            />
          </InputsSecondRow>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <StyledButton >Inquire Now</StyledButton>
          </div>
          </FormSection>
        </SectionContainer>
      ;
    </>
  );
};
