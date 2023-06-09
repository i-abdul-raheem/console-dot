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
  StyledTextarea,
} from "./elements";
import {
  Dark,
  HeadFont,
  Padding,
  Primary,
  Secondary,
  SubFont,
} from "../../utils";

export const InquireSection = () => {
  const labelStyle = {
    color: "white",
  };
  const textAreaStyles = {
    "::placeholder": {
      color: "white",
    },
  };
  return (
    <Container sx={{ background: Primary, padding: Padding }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
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
            Continuously and Systematically Evolve Your Product With Our Vetted
            Angular Developers
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
        <FormSection>
          <TextField
            id="outlined-basic"
            InputLabelProps={{
              style: labelStyle,
            }}
            inputProps={{
              style: labelStyle,
            }}
            sx={{
              width: "50",
              "& label.Mui-focused": {
                color: "#fff",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
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
              width: "50",
              "& label.Mui-focused": {
                color: "#fff",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
            label="Email Address"
            size="small"
          />

          <TextField
            id="outlined-basic"
            InputLabelProps={{
              style: labelStyle,
            }}
            inputProps={{
              style: labelStyle,
            }}
            sx={{
              width: "50",
              "& label.Mui-focused": {
                color: "#fff",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
            label="Phone Number"
            variant="outlined"
            size="small"
          />

          <StyledTextarea
            aria-label="minimum height"
            minRows={3}
            placeholder="your message"
            sx={textAreaStyles}
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
                backgroundColor: "white",
                color:Dark,
                '&:hover':{
                  backgroundColor: Dark,
                color: "white",
                }
                
              }}
            >
              Inquire Now
            </Button>
          </Box>
        </FormSection>
      </Box>
    </Container>
  );
};
