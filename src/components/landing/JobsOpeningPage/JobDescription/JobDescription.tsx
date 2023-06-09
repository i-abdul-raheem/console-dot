import { Layout } from "../../Layout/Layout";
import { MobResWrap } from "../../utils/utils";
import { JobBrief } from "./JobBrief";
import { SubmitForm } from "./SubmitForm";
import { MainContainer } from "./elements";
export const JobsDescription = () => {
  return (
    <>
      <Layout>
        <MainContainer>
          <JobBrief />
          <SubmitForm />
        </MainContainer>
      </Layout>
    </>
  );
};
