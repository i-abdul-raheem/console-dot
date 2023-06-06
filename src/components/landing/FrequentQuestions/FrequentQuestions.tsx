import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";
import { HeadFont, Padding } from "../utils";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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
  return (
    <Box>
      <Container sx={{ padding: Padding }}>
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
            <Typography sx={{ fontSize: HeadFont }}>
              Frequently Asked Question
            </Typography>
            <Typography>Still Have Quetions?</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <span style={{ color: "dodgerblue", fontWeight: "bol" }}>
                Let's Talk
              </span>
              <span>
                <ArrowRightAltIcon />
              </span>
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
                  <Typography sx={{ fontWeight: "bold", color: "dodgerblue" }}>
                    {question.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "lightblue" }}>
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

// import { Box, Container, Button, Typography } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { HeadFont } from "../utils";
// import React, { useState } from "react";
// interface Question {
//   id: number;
//   question: string;
//   answer: string;
// }
// export const FrequentQuestions: React.FC = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

//   const questions: Question[] = [
//     {
//       id: 1,
//       question: "Question 1",
//       answer: "Answer 1",
//     },
//     {
//       id: 2,
//       question: "Question 2",
//       answer: "Answer 2",
//     },
//     {
//       id: 3,
//       question: "Question 3",
//       answer: "Answer 3",
//     },
//     // Add more questions and answers as needed
//   ];

//   const handleQuestionClick = (questionId: number) => {
//     setSelectedQuestion(questionId === selectedQuestion ? null : questionId);
//   };

//   return (
//     <Box className="question-answer-container">
//       <Box sx={{ display: "flex", flexDirection: "column" }}>
//         {questions.map((question) => (
//           <Box
//             key={question.id}
//             sx={{
//               fontWeight: question.id === selectedQuestion ? "bold" : "normal",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContentL: "space-between",
//               }}
//             >
//               <Box>{question.question}</Box>
//               <Box>
//                 <Button onClick={() => handleQuestionClick(question.id)}>
//                   <ArrowDropDownIcon />
//                 </Button>
//               </Box>
//             </Box>

//             {question.id === selectedQuestion && (
//               <Box
//                 sx={{
//                   backgroundColor: "lightgray",
//                   transition: selectedQuestion ? "width 0.3s, height 0.3s" : "",
//                   width: "100%",
//                   height: "auto",
//                   padding: "10px",
//                   marginTop: "10px",
//                 }}
//               >
//                 {question.answer}
//               </Box>
//             )}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };
