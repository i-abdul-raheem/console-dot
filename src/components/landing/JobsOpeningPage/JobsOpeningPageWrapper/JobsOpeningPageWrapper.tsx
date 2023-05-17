import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Wrapper } from "../../utils";
import { JobsDescription } from "../JobDescription";
import { JobsOpeningTop } from "../JobsOpeningTop";
import { OpenJobsSection } from "../OpenJobsSection";

export const JobsOpeningPageWrapper = () => {
  return (
    <>
        <Header/>
        <JobsOpeningTop />
        <OpenJobsSection />
     
      
    </>
  );
};
