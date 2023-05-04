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
      <CareersTopPage />
      <EventsLifeEmp />
      <WorkingAtConsoleDot/>
      <WorkWithUs/>
      <ConsoleDotWarriorsReview/>
      <SignUpForNewsletter/>
      <FollowUsOn/>
    </>
  )
};
