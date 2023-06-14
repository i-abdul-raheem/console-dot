import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";
import {
  ContainerPadding,
  Dark,
  H1,
  H2,
  H3,
  HeadFont,
  Padding,
  Primary,
} from "../utils";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/router";
interface Question {
  id: number;
  question: string;
  answer: string;
}
const questions: Question[] = [
  {
    id: 1,
    question: "Quality",
    answer:
      "We're committed to delivering high-quality software solutions that are reliable, scalable, and built to last. We use rigorous testing and quality control processes to ensure that your software is ready for launch and meets your expectations.",
  },
  {
    id: 2,
    question: "Experties ",
    answer:
      "Our team of experienced developers, designers, and project managers has a deep understanding of software development best practices and emerging technologies. We're committed to staying up-to-date on the latest industry trends and using our expertise to help you succeed.",
  },
  {
    id: 3,
    question: "Transparency",
    answer:
      "We believe in being transparent with our clients about project timelines, budgets, and scope. We're committed to delivering projects on time and on budget, and we'll work with you to find creative solutions if unexpected challenges arise.",
  },
];
export const FrequentQuestions = () => {
  const router = useRouter();
  return (
    <Box>
      <Container sx={{ padding: ContainerPadding }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: {
                xl: "30%",
                lg: "30%",
                md: "30%",
                sm: "100%",
                xs: "100%",
              },
              padding: Padding,
            }}
          >
            <H1 variant="h1" mb={2}>
              Frequently Asked Question
            </H1>
            <H2 variant="h2" mb={2}>
              Still Have Quetions?
            </H2>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <H3
                onClick={() => router.push("/")}
                variant="h3"
                style={{ color: Primary }}
              >
                Let&apos;s Talk
              </H3>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xl: "70%",
                lg: "70%",
                md: "70%",
                sm: "100%",
                xs: "100%",
              },
              padding: Padding,
            }}
          >
            {questions.map((question) => (
              <Accordion
                key={question.id}
                sx={{ marginBottom: "10px", borderRadius: "10px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ fontWeight: "bold", color: Dark }}>
                    {question.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#555" }}>
                    {question.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
