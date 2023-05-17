import Image from "next/image";
import { SeeOpeningTopImage } from "@/assets";
import {
  JobsTopContainer,
  JobsTopHeading,
  JobsTopPara,
  LeftFlex,
  RightFlex,
} from "./elements";
export const JobsOpeningTop = () => {
  return (
    <>
      <JobsTopContainer>
        <LeftFlex>
          <JobsTopHeading style={{color:"rgb(23 , 96 , 128 )", lineHeight:"50px"}}>
            Kick-start Your Journey with ConsoleDot
          </JobsTopHeading>
          <JobsTopPara style={{color:"rgb(23 , 96 , 128 ,0.5)"}}>
            Open Doors To New Opportunities In Your Career, We are looking for
            enthusiasts who would welcome change with both their arms wide open.
            And that’s how we along with you will bring a transformation in the
            world. Find out the roles that are we are currently open for:
          </JobsTopPara>
        </LeftFlex>

        <RightFlex>
          <Image
            src={SeeOpeningTopImage}
            alt="Image"
            width={451}
            height={473}
            style={{width:"auto", height:'auto'}}
          />
        </RightFlex>
      </JobsTopContainer>
    </>
  );
};
