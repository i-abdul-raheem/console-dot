import { Container, Box, Typography } from "@mui/material";
import { ButtonContainer, StyledButton } from "./elements";
import {
  JobBriefContainer,
  ListItems,
  PageTitle,
  StyledText,
} from "./elements";
import { useState, useEffect } from "react";
import { Dark, HeadFont, Primary } from "@/components/landing/utils";
import { useRouter } from "next/router";
import { getSingleCareer } from "@/apis/careers";

export const JobBrief = () => {
  const router = useRouter();
  const query = router.query;
  const [data, setData] = useState<any>({});
  useEffect(() => {
    getSingleCareer(query?.job_id).then((res) => setData(res));
  }, []);


  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box>
      <Container>
        <JobBriefContainer>
          <div
            style={{ borderBottom: "1px solid #ddd", paddingBottom: "20px" }}
          >
            <Typography
              sx={{ fontSize: HeadFont, color: "#226597", textAlign: "center" }}
            >
          
             {data.title}
            </Typography>
            <StyledText style={{ fontWeight: "bold", paddingBottom: "10px" }}>
              Job Brief:
            </StyledText>
            <StyledText>
              {data?.summary}
            </StyledText>
            <StyledText sx={{ textAlign: "left" }}>
              <b>Role:</b> {data?.title}
            </StyledText>
            <StyledText sx={{ textAlign: "left" }}>
              <b>Experience:</b> {data?.experience}
            </StyledText>
            <StyledText sx={{ textAlign: "left" }}>
              <b>Position Open:</b> {data?.positions}
            </StyledText>
            <StyledText sx={{ textAlign: "left" }}>
              <b>Job Location:</b>Work From Office
            </StyledText>
          </div>

          {/* <div style={{ borderBottom: "1px solid #ddd" }}>
            <Typography
              sx={{ fontSize: HeadFont, color: "#226597", textAlign: "center" }}
            >
              Roles and Responsibility:
            </Typography>
            <ul style={{ paddingBottom: "20px" }}>
              <ListItems>Write clean, well designed code</ListItems>
              <ListItems>Produce detailed specifications</ListItems>
              <ListItems>
                Troubleshoot, test and maintain the core product software and
                databases to ensure strong optimization and functionality
              </ListItems>
              <ListItems>
                Contribute in all phases of the development lifecycle
              </ListItems>
              <ListItems>Follow industry best practices</ListItems>
              <ListItems>
                Develop and deploy new features to facilitate related procedures
                and tools if necessary
              </ListItems>
              <ListItems>
                Client Interaction and communication in English will be added
                advantage.
              </ListItems>
            </ul>
          </div>

          <div style={{ borderBottom: "1px solid #ddd" }}>
            <Typography
              sx={{ fontSize: HeadFont, color: "#226597", textAlign: "center" }}
            >
              Skill Requirement:
            </Typography>
            <ul style={{ paddingBottom: "20px" }}>
              <ListItems>
                Strong knowledge of Linux system with command line.
              </ListItems>
              <ListItems>
                Strong knowledge of PHP and core PHP web frameworks such as
                Laravel.
              </ListItems>
              <ListItems>Should have knowledge of object oriented.</ListItems>
              <ListItems>
                Understanding the fully synchronous behavior of PHP
              </ListItems>
              <ListItems>Understanding of MVC design patterns.</ListItems>
              <ListItems>Good to have knowledge of Advanced laravel</ListItems>
              <ListItems>Good to have knowledge of Vue/React.</ListItems>
            </ul>
          </div> */}

          <div style={{ borderBottom: "1px solid #ddd", padding: "24px 0" }}>
            <StyledText sx={{ textAlign: "left" }}>
              <b>Qualification :</b> {data?.qualification}
            </StyledText>
          </div>
          {/* <div style={{ borderBottom: "1px solid #ddd", padding: "24px 0" }}>
            <StyledText sx={{ textAlign: "left" }}>
              <b>Office Timings:</b> 10.00 AM to 7.00 PM
            </StyledText>
          </div> */}

          {/* <div style={{ borderBottom: "1px solid #ddd" }}>
            <Typography
              sx={{ fontSize: HeadFont, color: "#226597", textAlign: "center" }}
            >
              Perks and Benefits:
            </Typography>
            <ul style={{ paddingBottom: "20px" }}>
              <ListItems>5-Days a week</ListItems>
              <ListItems>Health Insurance</ListItems>
              <ListItems>
                (28 Leaves a year) 18 paid leave & 10 public holiday
              </ListItems>
              <ListItems>Recruitment referral bonus policy</ListItems>
              <ListItems>Maternity paternity leave benefit</ListItems>
              <ListItems>Training and Development: Certifications</ListItems>
              <ListItems>
                Employee engagement activities: awards, community gathering
              </ListItems>
              <ListItems>Good Infrastructure</ListItems>
              <ListItems>Flexible working culture</ListItems>
              <ListItems>Work From Anywhere</ListItems>
              <ListItems>Onsite opportunity</ListItems>
            </ul>
          </div> */}

          <ButtonContainer>
            <StyledButton
              sx={{
                marginTop: "10px",
                color: "white",
                backgroundColor: Primary,
                "&:hover": {
                  backgroundColor: Dark,
                },
              }}
              onClick={() => router.push("/jobs")}
            >
              Go Back
            </StyledButton>
          </ButtonContainer>
        </JobBriefContainer>
      </Container>
    </Box>
  );
};
