
import { MobResWrap } from "../../utils/utils";
import { JobBrief } from "./JobBrief";
import { SubmitForm } from "./SubmitForm";
import { MainContainer } from "./elements";
export const JobsDescription = () => {
  return (
    <>
    <MobResWrap>
      <MainContainer>
        <JobBrief/>
        <SubmitForm/>
        </MainContainer>
        </MobResWrap>
    </>
  );
};
