import { Box, Container, Typography } from "@mui/material";
import MediaCard from "../MediaCard/MediaCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/apis/projects";
import { CaseStudyTop } from "../casestudy/CaseStudyTop/CaseStudyTop";
import { CasestudyTop } from "../casestudy/CaseStudyTop/elements";
import { HeadFont } from "../utils";
export const CustomersDetail = () => {
  const router = useRouter();
  const details = router.query;
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const handlePopState = () => {
      router.back();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const getCustomers = () => {
    getAllProjects(details?._id).then((res) => setProjects([...res]));
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const handleClick = (customer: any) => {
    router.push({
      pathname: `/casestudy/${customer}`,
    });
  };
  return (
    <Box>
      <Box>
        <CasestudyTop />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "40%",
            color: "white",
            fontWeight: "bold",
            fontSize: HeadFont,
          }}
        >
          {details.name}
        </Box>
      </Box>
      <Container>
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
            marginTop: "10px",
          }}
        >
          {/* <MediaCard
            title={details.name}
            image=""
            placeholder="see Case Study"
            explanation={details.contact_info}
            onClick={() => handleClick(details?._id)}
            // onClick={() => router.push(`/casestudy/${details?._id}`)}
          /> */}
          {projects &&
            projects?.map((project: any, index: string) => (
              <MediaCard
                title={project?.title}
                image={project?.hero}
                placeholder="View Details"
                onClick={() => handleClick(project?._id)}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
};
