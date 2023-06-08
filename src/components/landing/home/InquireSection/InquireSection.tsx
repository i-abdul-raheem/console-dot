import {
  TextField,
  Button,
  TextareaAutosize,
  Container,
  Typography,
  Box,
} from "@mui/material";
import {
  FormSection,
  InputsFirstRow,
  InputsSecondRow,
  SectionContainer,
  SectionTitle,
  StyledButton,
} from "./elements";
import { HeadFont, Padding, Primary, Secondary, SubFont } from "../../utils";

export const InquireSection = () => {
  const labelStyle = {
    color: "white",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
    },
  };
  return (
    <Container sx={{ background: "transparent", padding: Padding }}>
      <Box sx={{ background: "#113f67" }}>
        <SectionContainer>
          <Box>
            <Typography
              sx={{
                fontSize: HeadFont,
                textAlign: "center",
                padding: Padding,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Continuously and Systematically Evolve Your Product With Our
              Vetted Angular Developers
            </Typography>
            <Typography
              sx={{
                fontSize: SubFont,
                padding: Padding,
                textAlign: "center",
                color: "white",
              }}
            >
              We ensure you’re matched with the right talent resource based on
              your requirement.
            </Typography>
          </Box>
          <FormSection sx={{ padding: Padding }}>
            <InputsFirstRow>
              <TextField
                id="outlined-basic"
                InputLabelProps={{
                  style: labelStyle,
                }}
                inputProps={{
                  style: labelStyle,
                }}
                sx={{
                  width: "100%",
                }}
                label="Your Name"
                size="small"
              />

              <TextField
                InputLabelProps={{
                  style: labelStyle,
                }}
                inputProps={{
                  style: labelStyle,
                }}
                sx={{
                  color: "sucess.main",
                  width: "100%",
                }}
                label="Email Address"
                size="small"
              />
            </InputsFirstRow>
            <TextField
              id="outlined-basic"
              InputLabelProps={{
                style: labelStyle,
              }}
              inputProps={{
                style: labelStyle,
              }}
              sx={{
                width: "100%",
              }}
              label="Phone Number"
              variant="outlined"
              size="small"
            />

            <TextareaAutosize
              id="outlined-basic"
              placeholder="Your Message"
              minRows={7}
              style={{ fontSize: "20px", marginTop: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: Padding,
              }}
            >
              <Button
                sx={{
                  backgroundColor: Primary,
                  color: "white",
                }}
              >
                Inquire Now
              </Button>
            </Box>
          </FormSection>
        </SectionContainer>
      </Box>
    </Container>
  );
};
