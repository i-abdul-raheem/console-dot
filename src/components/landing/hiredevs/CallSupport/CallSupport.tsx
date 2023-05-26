import Image from "next/image";
import {
    CallSupportContainer,
    CallSupportSection,
  ContactLine,
  ContactNum,
  IconLine,
  SectionHeading,
  SectionSubHeading,
  StyledImage,
  StyledText,
} from "./elements";
import LabelTwoToneIcon from "@mui/icons-material/LabelTwoTone";
import { America, India, Linked, Pak, Skype, WhatsApp } from "@/assets";
export const CallSupport = () => {
  return (
    <>
      <CallSupportContainer>
        <div style={{display:"flex", flexDirection:"column", padding:"32px"}}>
          <SectionHeading>
            At Bacancy, We Have Made it Easy for Clients to Reach Us and Get
            Their Solutions Weaved
          </SectionHeading>
        
        <IconLine>
          <LabelTwoToneIcon />
          <SectionSubHeading>Put Forward Your Requirement</SectionSubHeading>
        </IconLine>
        <StyledText>
          Drop your inquiry in the form given on the right side of this page.
          And within 24 hours, one of our business development executive will
          reach you for further communication.
        </StyledText>
        <IconLine>
          <LabelTwoToneIcon />
          <SectionSubHeading>Sign Non-Disclosure Agreement</SectionSubHeading>
        </IconLine>
        <StyledText>
          With the help of an NDA, we make you feel secure. Your idea will be
          yours. Signing an NDA assures you the privacy of your idea and
          project.
        </StyledText>
        <IconLine>
          <LabelTwoToneIcon />
          <SectionSubHeading>Analyzing Your Requirement</SectionSubHeading>
        </IconLine>
        <StyledText>
          Once you have signed the NDA, we will analyze the requirements put
          forward by you. Our team of scrum masters will read and analyze the
          same, and will get back to you within few hours.
        </StyledText>
        <IconLine>
          <LabelTwoToneIcon />
          <SectionSubHeading>Estimated Budget</SectionSubHeading>
        </IconLine>
        <StyledText>
          Once our team of scrum masters and business development managers are
          done with analyzing the project and compilation of necessary resources
          required for the project, we will get back to you with Estimated
          Budget/Cost and Estimated Time Required for completion of project
          successfully.
        </StyledText>
        </div>
        <CallSupportSection>
          <SectionHeading>On-Call Support</SectionHeading>
          <ContactLine>
            <StyledImage src={America} alt="America"/>
            <ContactNum>+1 347 441 4161</ContactNum>
          </ContactLine>
          <ContactLine>
            <StyledImage src={India} alt="India"/>
            <ContactNum>079 4003 7674</ContactNum>
          </ContactLine>
          <ContactLine>
            <StyledImage src={Pak} alt="Pak"/>
            <ContactNum>+1 347 441 4161</ContactNum>
          </ContactLine>
          <ContactLine>
            <StyledImage src={Skype} alt="Skype"/>
            <ContactNum>Consoledot</ContactNum>
          </ContactLine>
          <ContactLine>
            <StyledImage src={WhatsApp} alt="WhatsApp"/>
            <ContactNum>+92 47 441 4161</ContactNum>
          </ContactLine>
          <ContactLine>
            <StyledImage src={Linked} alt="Linked"/>
            <ContactNum>#consoledot</ContactNum>
          </ContactLine>

          </CallSupportSection>
          </CallSupportContainer>
    </>
  );
};
