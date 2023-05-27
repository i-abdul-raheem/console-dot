import { Header } from "../../Header";
import { Wrapper } from "../../utils";
import { MobResWrap } from "../../utils/utils";
import { CareersTopPage } from "../CareersTopPage";
import { ConsoleDotWarriorsReview } from "../ConsoleDotWarriorsReview";
import { EventsLifeEmp } from "../EventsLifeEmp";
import { FollowUsOn } from "../FollowUsOn";
import { SignUpForNewsletter } from "../SignUpForNewsletter";
import { WorkWithUs } from "../WorkWithUs";
import { WorkingAtConsoleDot } from "../WorkingAtConsoleDot";

export const CareersWrapper = () => {
  return (
    <>
      <MobResWrap>
        {/* <Header /> */}
        <CareersTopPage />
        <EventsLifeEmp />
        <WorkingAtConsoleDot />
        <WorkWithUs />
        <ConsoleDotWarriorsReview />
        <SignUpForNewsletter />
        <FollowUsOn />
      </MobResWrap>
    </>
  );
};
