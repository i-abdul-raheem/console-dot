import { TextField, Button, TextareaAutosize, Container } from "@mui/material";
import {
  FormSection,
  InputsFirstRow,
  InputsSecondRow,
  SectionContainer,
  SectionTitle,
  StyledButton,
} from "./elements";
import { Wrapper } from "../../utils";
import { ColumnInMobile } from "../CccSection/elements";

export const InquireSection = () => {
  return (
    <Container>
      <SectionContainer>
        <SectionTitle>
          <h1
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            How Can We Help You?{" "}
          </h1>
        </SectionTitle>
        <FormSection>
          <InputsFirstRow>
            <TextField
              id="outlined-basic"
              style={{ width: "100%" }}
              label="Your Name"
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              style={{ width: "100%" }}
              label="Email Address"
              variant="outlined"
            />
          </InputsFirstRow>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Phone Number"
            variant="outlined"
          />

          <TextareaAutosize
            id="outlined-basic"
            placeholder="Your Message"
            minRows={7}
            style={{ fontSize: "20px" }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <StyledButton>Inquire Now</StyledButton>
          </div>
        </FormSection>
      </SectionContainer>
    </Container>
  );
};
