import { Container, Box, Typography } from "@mui/material";
import { ButtonContainer, StyledButton } from "./elements";
import { JobBriefContainer } from "./elements";
import { useState, useEffect } from "react";
import {
  ContainerPadding,
  Dark,
  H1,
  HeadFont,
  Primary,
} from "@/components/landing/utils";
import { useRouter } from "next/router";
import { getSingleCareer } from "@/apis/careers";

export const JobBrief = () => {
  const router = useRouter();
  const query = router.query;
  const [data, setData] = useState<any>({});
  useEffect(() => {
    getSingleCareer(query?.job_id).then((res) => setData(res));
  }, [query?.job_id]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box>
      <Container sx={{ padding: ContainerPadding }}>
        <JobBriefContainer>
          <div
            style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
          >
            <H1
              variant="h1"
              mb={2}
              sx={{ color: Primary, textAlign: "center" }}
            >
              {data.title}
            </H1>
            <Typography style={{ fontWeight: "bold" }} mb={2}>
              Job Brief:
            </Typography>
            <Typography mb={2}>{data?.summary}</Typography>
            <Typography sx={{ textAlign: "left" }} mb={2}>
              <b>Role:</b> {data?.title}
            </Typography>
            <Typography sx={{ textAlign: "left" }} mb={2}>
              <b>Experience:</b> {data?.experience}
            </Typography>
            <Typography sx={{ textAlign: "left" }} mb={2}>
              <b>Position Open:</b> {data?.positions}
            </Typography>
            <Typography sx={{ textAlign: "left" }} mb={2}>
              <b>Job Location:</b>Work From Office
            </Typography>
          </div>

          <div style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
            <Typography sx={{ textAlign: "left" }} mb={2}>
              <b>Qualification :</b> {data?.qualification}
            </Typography>
          </div>

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
