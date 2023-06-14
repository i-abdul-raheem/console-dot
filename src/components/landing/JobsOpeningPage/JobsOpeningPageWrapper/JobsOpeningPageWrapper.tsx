import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Layout } from "../../Layout/Layout";
import { Wrapper } from "../../utils";
import { MobResWrap } from "../../utils/utils";
import { JobsDescription } from "../JobDescription";
import { JobsOpeningTop } from "../JobsOpeningTop";
import { OpenJobsSection } from "../OpenJobsSection";

export const JobsOpeningPageWrapper = () => {
  return (
    <>
      <Layout>
        <JobsOpeningTop />
        <OpenJobsSection />
      </Layout>
    </>
  );
};
