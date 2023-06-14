import { Box, Container, Button, Typography } from "@mui/material";
import { HeadFont, ImageContainer, Padding, SubFont } from "../../utils";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import * as React from "react";
import Paper from "@mui/material/Paper";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
export const Steppers = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box
      sx={{
        width: "100%",
        padding: Padding,
        display: "flex",
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          width: {
            xl: "50%",
            lg: "50%",
            md: "50%",
            sm: "100%",
            sx: "100%",
          },
          padding: {
            xl: "2rem 0rem",
            lg: "1.8rem 0rem",
            md: "1.5rem 0rem",
            sm: "1.2rem 0rem",
            xs: "1rem 0rem",
          },
          border: "1px solid gray",
        }}
      >
        <Typography
          sx={{
            fontSize: HeadFont,
            textAlign: "left",
            padding: Padding,
            fontWeight: "bold",
          }}
        >
          Continuously and Systematically Evolve Your Product With Our Vetted
          Angular Developers
        </Typography>
        <Typography
          sx={{
            fontSize: SubFont,
            padding: Padding,
            textAlign: "left",
          }}
        >
          We are early adopters and now the veterans of this widely used
          front-end technology. At Bacancy, our top ReactJS engineers are known
          for delivering projects with extreme proficiency that syncs utterly
          with your industry standard. From custom app development to ReactJS
          consultation – our ReactJS experts are well-versed at providing
          on-time effective solutions to all the shapes and sizes of businesses
          that include start-ups, SMEs, large-scale enterprises, independent
          CEOs, and CTOs. Outsource full-time ReactJS developers from us to
          develop lightweight and interactive applications, as our core
          competency lies in building interactive user interfaces with the help
          of powerful React libraries.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#156380",
              color: "white",
              fontWeight: "bold",
              borderLeft: "none",
              borderTopLeftRadius: "none",
              borderBottomLeftRadius: "none",
              width: "90%",
            }}
            size="large"
          >
            CONSULT OUR REACTJS EXPERTS
          </Button>
        </Box>
        <Box
          sx={{
            width: {
              xl: "50%",
              lg: "50%",
              md: "50%",
              sm: "100%",
              sx: "100%",
            },
            padding: {
              xl: "2rem 0rem",
              lg: "1.8rem 0rem",
              md: "1.5rem 0rem",
              sm: "1.2rem 0rem",
              xs: "1rem 0rem",
            },
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: {
            xl: "50%",
            lg: "50%",
            md: "50%",
            sm: "100%",
            xs: "100%",
          },
        }}
      >
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
};
